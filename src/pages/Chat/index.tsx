import {
	ChatContainer, 
  	ChatBar, 
  	Sidebar, 
  	SidebarBody,
  	SidebarBodyUsers,
	SidebarBodyUser,
  	Header,
  	HeaderTitle,
  	HeaderStatus,
  	Body,
  	Footer,
  	UserTyping,
  	ButtonSubmit,
  	FormMessage,
	ProfileIcon,
	Profile,
	GroupImage,
	ProfileCard,
	ExitCard,
	MsgContainer,
	Msg,
	MsgInfo,
	MsgTime,
	MsgText
} from './style';

import { socket } from '../../service/socket';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import {  useEffect,  useState } from 'react';
import Login from '../Login';

const logo = require('../../assets/group.png');
const  { solid } = require('@fortawesome/fontawesome-svg-core/import.macro');

const USER_JOIN = "join";
const UPDATE_USERS_EVENT = "users update";
const NEW_CHAT_MESSAGE_EVENT = "update messages";
const SEND_CHAT_MESSAGE_EVENT = "msg";

interface Message {
	name: string;
    senderId: string;
    text: string;
}
interface User {
	id: string;
	name: string;
}

const Chat = () => {
	const [logged, setLogged] = useState(false);
	const [openDrawer, setOpenDrawer] = useState(false);
	const [message, setMessage] = useState<string>("");
	const [messages, setMessages] = useState<Message[]>([]);
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		socket.on(NEW_CHAT_MESSAGE_EVENT, (updatedMessages) => {
            setMessages(updatedMessages);
			setTimeout(() => {
				document.querySelector('.body')?.scrollTo({ top: document.querySelector('.body')?.scrollHeight, behavior: 'smooth' });
			}, 100);
        });

		socket.on(UPDATE_USERS_EVENT, (users) => {
			let usersArray = [];
			for (const key in users) {
				usersArray.push({ id: key, name: users[key] });
			}

			setUsers(usersArray);
		});
	}, []);

	const sendMessage = (messageBody: string) => {
        socket.emit(SEND_CHAT_MESSAGE_EVENT, {
            body: messageBody,
            senderId: socket.id,
        });
    };

	const join = (name: string) => {
        socket.emit(USER_JOIN, {
            name: name,
        });
    };

	const handleClick = (name: string) => {
        join(name);
		setLogged(true);
    }

	const handleSubmit = (e:any) => {
		e.preventDefault();

		if (message.trim() !== "") {
			sendMessage(message);
			setMessage("");
		}
	}

	return (
		<ChatContainer>
			{ !logged ? <Login onEnter={(name:string) => handleClick(name)}></Login> : null }

			<Sidebar>
				<SidebarBody>
					<p>Online:</p>
					<SidebarBodyUsers>
						{
							users.map((user: User) => (
								<SidebarBodyUser key={user.name}>
									<ProfileIcon hash={'#b49ff4'}>D</ProfileIcon>
									<div>
										<p>{ user.name }</p>
										<span>Há 3 minutos</span>
									</div>
								</SidebarBodyUser>
							))
						}
					</SidebarBodyUsers>
				</SidebarBody>
			</Sidebar>
			<ChatBar>
				<Header>
					<div>
						<GroupImage alt="" src={logo} />
						<div>
							<HeaderTitle>Chat Geral</HeaderTitle>
							<HeaderStatus>3 Online</HeaderStatus>
						</div>
					</div>
					<FontAwesomeIcon onClick={() => setOpenDrawer(!openDrawer)} icon={solid('bars')} />
				</Header>
				<Body className="body">
					<AnimatePresence>
					{
						messages.map((message, index) =>(
							<MsgContainer 
								className={socket.id === message.senderId ? 'own' : ''} as={motion.div} 
								initial={{ opacity: 0, x: -100 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0 }}
							>
								<Msg className={socket.id === message.senderId ? 'own' : ''}>
									<MsgInfo>
										<p className='msg-user'>{message.name}</p>
										<MsgTime>{'14:23'}</MsgTime>
									</MsgInfo>
									<MsgText>{message.text}</MsgText>
								</Msg>
							</MsgContainer>
						))
					}
					</AnimatePresence>
				</Body>
				<Footer>
					<UserTyping></UserTyping>
					<FormMessage name="messageForm" onSubmit={(e) => handleSubmit(e)}>
						<input value={message} autoComplete="off" type="text" name="txtMsg" placeholder="Mensagem" onChange={(e) => setMessage(e.target.value)} onKeyUp={(e) => { if (e.charCode === 13) handleSubmit(e)}} />
						<ButtonSubmit type="submit">
							<FontAwesomeIcon size="lg" icon={solid('paper-plane')} />
						</ButtonSubmit>
					</FormMessage>
				</Footer>
			</ChatBar>
			<Profile as={motion.div} animate={openDrawer ? "open" : "closed"} variants={variants}>
				<ProfileCard>
					<ProfileIcon hash={'#b49ff4'}>D</ProfileIcon>
					<h3>Daniel Victor</h3>
				</ProfileCard>
				<ExitCard onClick={() => setLogged(false)}>
					<p>Sair</p>
					<FontAwesomeIcon icon={solid('sign-out-alt')} />
				</ExitCard>
			</Profile>
		</ChatContainer>
  );
}

const variants = {
	open: { width: 300, paddingLeft: 40, paddingRight: 40, opacity: 1 },
	closed: { width: 0, paddingLeft: 0, paddingRight: 0, opacity: 0 },
}

export default Chat;
