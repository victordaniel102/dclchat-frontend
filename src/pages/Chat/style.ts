import styled from 'styled-components';

export const PageContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: #f0c8ff;
    position: relative;

    ::-webkit-scrollbar-track {
        background-color: #F4F4F4;
    }
    ::-webkit-scrollbar {
        width: 6px;
        background: #F4F4F4;
    }
    ::-webkit-scrollbar-thumb {
        background: #dad7d7;
    }
`;

/* MODAL */

export const Modal = styled.div `
    width: 100vw;
    height: 100vh;
    background-color: #8141ca;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    z-index: 1 !important;

    > p {
        color: white;
        font-size: 32px;
    }

    input {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #EFEFEF;
        padding: 15px;
        color: white;
        width: 300px;
        text-align: center;
    }
`;

export const ChatContainer = styled.div `
    width: 100vw;
    height: 100vh;
    background-color: #FAFAFA;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    box-shadow: 0px 3px 20px -3px rgba(0,0,0,0.15);
    border-radius: 5px;
    overflow: hidden;
`;

export const ChatBar = styled.div `
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

export const Sidebar = styled.div `
    min-width: 300px;
    max-width: 300px;
    z-index: 1;
`;

export const SidebarHeader = styled.div `
    background-color: #EFEFEF;
    display: flex;
    justify-content: flex-start;
    text-overflow: ellipsis;
    align-items: center;
    padding: 15px;

    > img {
        width: 40px;
        border-radius: 100%;
    }

    > div {
        max-width: 200px;
    }

    > div > p, .sidebar-body-users > p, .span-alert > p {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    > div {
        margin-left: 15px;
    }
`;

export const SidebarBody = styled.div `
    padding: 20px;

    > p {
        color: #A8A8A8;
        margin: 10px 0 10px 0;
        font-weight: bold;
        font-size: 14px;
    }
`;

export const SidebarBodyUsers = styled.div `
    > p {
        width: 100%;
        
        color: #555;
        cursor: pointer;
        transition: 0.2s;
        border-radius: 5px;
        
    }

    > p
`;

export const SidebarBodyUser = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    padding: 15px 20px;
    user-select: none;
    cursor: pointer;
    transition: .2s;

    div:first-child, > img {
        flex: none;
        margin-right: 15px;
    }

    > div {
        display: flex;
        flex-direction: column;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    span {
        font-size: 12px;
        color: #999;
    }

    :hover {
        background-color: #FFF;
        box-shadow: 0px 3px 20px 0px rgba(0,0,0,0.10);
    }
`;


/* HEADER */

export const Header = styled.div `
    width: 100%;
    height: max-content;
    padding: 25px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    color: #00255C;
    z-index: 1 !important;

    > div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    > svg {
        cursor: pointer;
    }
`;

export const GroupImage = styled.img `
    width: 40px;
    border-radius: 100%;
    margin-right: 20px;
`

export const HeaderTitle = styled.p `
    font-size: 18px;
`;

export const HeaderStatus = styled.p `
    font-size: 14px;
    color: #cccccc;
`;

/* BODY */

export const Body = styled.div `
    display: flex;
    height: 100%;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    padding: 20px;
    overflow-y: auto;
`;

export const SpanAlert = styled.div `
    width: 100%;
    display: flex; 
    justify-content: center;
    align-items: center;

    > p {
        padding: 10px;
        background-color: #FFF;
        border-radius: 2px;
        margin: 10px 0;
        font-size: 12px;
        max-width: 200px;
    }
`;

export const MsgContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: flex-start;
    margin: 5px 0;

    &.own {
        justify-content: flex-end !important;
    }
`;

export const Msg = styled.div `
    background-color: #FFF;
    max-width: 65%;
    padding: 10px 15px;
    border-radius: 5px;
    position: relative;
    height: max-content;
    box-shadow: 0px 2px 20px 0px rgba(0,0,0,0.05);

    &.own {
        background-color: ${props => props.theme.primary};
        color: white;
    }
`;

export const MsgInfo = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
    margin-bottom: 10px;
    font-size: 12px;
`;

export const MsgText = styled.p `
    word-break: break-word;
    font-size: 1em;
`;

export const MsgTime = styled.p `
    color: #a3a3a3;
    font-size: 12px;
    margin-left: 5px;
`;

// .msg .msg-user {
//     color: #8141ca;
// }

// .msg.nown:before {
//     border: 10px solid transparent;
//     border-right-color: #FFF;
//     content: "";
//     left: -20px;
//     position: absolute;
//     top: 50%;
//     margin-top: -9px;
// }

// .msg.own:after {
//     border: 10px solid transparent;
//     border-left-color: #e9d5ff;
//     content: "";
//     right: -20px;
//     position: absolute;
//     top: 50%;
//     margin-top: -9px;
// }

/* FOOTER */

export const Footer = styled.div `
    padding: 20px;
`;

export const FormMessage = styled.form `
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    > input {
        background-color: #FFF;
        border-radius: 50px;
        border: none;
        padding: 15px;
        flex-grow: 1;
        transition: 0.2s;
        box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.05);
    }

    > input.typing {
        border-radius: 0 50px 50px;
    }
`;

export const ButtonSubmit = styled.button `
    width: 46px;
    height: 46px;
    border-radius: 100%;
    background: linear-gradient(to right, ${props => props.theme.primary}, #CA00EB);
    box-shadow: 0px 3px 10px 0px rgba(0,0,0,0.15);
    transition: 0.2s;
    border: none;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    right: 0;
    cursor: pointer;

    :active {
        box-shadow: none;
    }
`;

export const UserTyping = styled.p `
    color: #a3a3a3;
    margin-bottom: 5px;
`;

// @media screen and (max-width: 1000px) {
//     .container {
//         width: 100%;
//         height: 100%;
//     }

//     .sidebar {
//         display: none;
//     }

//     .msg-text {
//         font-size: 16px;
//     }

//     .header {
//         min-height: 70px;
//     }

//     .body {
//         overflow: auto;
//     }

//     .msg-container.nown {
//         min-height: 83px;
//         height: max-content;
//         min-block-size: max-content;
//     }

//     .msg-container.own {
//         min-height: 59px;
//         height: max-content;
//         min-block-size: max-content;
//     }
// }

export const ProfileIcon = styled.div<{ hash: string; }> `
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: ${props => props.hash};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: #FFF;
`;

export const Profile = styled.div `
    width: 300px;
    height: 100%;
    background: #F7F7F7;
    padding-top: 40px;
    padding-bottom: 40px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ProfileCard = styled.div `
    width: 100%;
    background-color: #FFF;
    border-radius: 5px;
    padding: 30px;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    overflow: hidden;
    box-shadow: 0px 3px 20px 0px rgba(0,0,0,0.05);

    > * {
        flex: none;
        white-space: nowrap;
    }

    h3 {
        margin-top: 10px;
        color: ${props => props.theme.onBackground};
    }
`;

export const ExitCard = styled.div `
    width: 100%;
    background-color: #FFF;
    border-radius: 5px;
    padding: 15px;
    margin-top: 10px;

    box-shadow: 0px 3px 20px 0px rgba(0,0,0,0.05);
    color: red;
    font-weight: bold;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    transition: .2s;
    user-select: none;

    :hover {
        cursor: pointer;
        background: #ff6647;
        color: #FFF;
    }

    :active {
        background: red;
    }
`;