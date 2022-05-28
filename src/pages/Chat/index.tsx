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
	ExitCard
} from './style';

import { socket } from '../../service/socket';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import {  useEffect,  useState } from 'react';
import Login from '../Login';

const logo = require('../../assets/group.png');
const  { solid } = require('@fortawesome/fontawesome-svg-core/import.macro');

const USER_JOIN = "join";
const NEW_CHAT_MESSAGE_EVENT = "msg";

interface Message {
    senderId: string;
    body: string;
}

const Chat = () => {
	const navigate = useNavigate();
	const [logged, setLogged] = useState(false);
	const [openDrawer, setOpenDrawer] = useState(false);
	const [message, setMessage] = useState<string>("");
	const [messages, setMessages] = useState<Message[]>([]);

	useEffect(() => {

		socket.on(NEW_CHAT_MESSAGE_EVENT, (message: { senderId: string, body: string }) => {
            const incomingMessage = {
                ...message,
                ownedByCurrentUser: message.senderId === socket.id,
            };
            setMessages((messages) => [...messages, incomingMessage]);
        });
	}, []);

	useEffect(() => {
		if (localStorage.getItem('id') === null) {
			navigate('/login');
		}

	}, [navigate]);

	const sendMessage = (messageBody: string) => {
        socket.emit(NEW_CHAT_MESSAGE_EVENT, {
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
						<SidebarBodyUser>
							<ProfileIcon hash={'#b49ff4'}>D</ProfileIcon>
							<div>
								<p>Daniel Victor</p>
								<span>Há 3 minutos</span>
							</div>
						</SidebarBodyUser>
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
				<Body>
					{
						messages.map((message, index) => {
							return (<p>{ message.body }</p>);
						})
					}
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
