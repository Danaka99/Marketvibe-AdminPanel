import Breadcrumbs from '@mui/material/Breadcrumbs';
import { emphasize, styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import {AreaChart,Area,XAxis,YAxis,CartesianGrid,Tooltip} from "recharts";
import { useEffect } from 'react';
import { IoChatboxEllipses } from "react-icons/io5";


const StyledBreadcrumb = styled(Chip)(({theme})=>{
    
    const backgroundColor= 
    theme.palette.mode=== "light"
    ? theme.palette.grey[100]
    : theme.palette.grey[800];

    return{
        backgroundColor,
        height: theme.spacing(3),
        color : theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus' :{
            backgroundColor:emphasize(backgroundColor, 0.06),
        },
        '&: active':{
            boxShadow:theme.shadows[1],
            backgroundColor:emphasize(backgroundColor, 0.12),
        },

    };
});

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];



const SellerAcount = () => {

    useEffect(() => {
    const textarea = document.querySelector('.chatbox-message-input');
        const chatboxForm = document.querySelector('.chatbox-message-form');
        const chatboxToggle = document.querySelector('.chatbox-toggle');
        const chatboxMessageWrapper = document.querySelector('.chatbox-message-wrapper');
        const chatboxNoMessage = document.querySelector('.chatbox-message-no-message');

        if (!textarea || !chatboxForm || !chatboxToggle || !chatboxMessageWrapper || !chatboxNoMessage) {
            console.error('One or more elements could not be found.');
            return; // Exit if elements are missing
        }

        textarea.addEventListener('input', function () {
            let line = textarea.value.split('\n').length;
            textarea.rows = Math.min(6, line); // Set max rows to 6
            chatboxForm.style.alignItems = textarea.rows > 1 ? 'flex-end' : 'center';
        });

        chatboxToggle.addEventListener('click', function () {
            chatboxMessageWrapper.classList.toggle('show');
        });

        chatboxForm.addEventListener('submit', function (e) {
            e.preventDefault();
            if (isValid(textarea.value)) {
                writeMessage();
                setTimeout(autoReply, 1000);
            }
        });

        function writeMessage() {
            const today = new Date();
            const message = `
                <div class="chatbox-message-item sent">
                    <span class="chatbox-message-item-text">
                        ${textarea.value.trim().replace(/\n/g, '<br>\n')}
                    </span>
                    <span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
                </div>
            `;
            chatboxMessageWrapper.insertAdjacentHTML('beforeend', message);
            chatboxForm.style.alignItems = 'center';
            textarea.rows = 1;
            textarea.value = '';
            chatboxNoMessage.style.display = 'none';
            scrollBottom();
        }

        function autoReply() {
            const today = new Date();
            const message = `
                <div class="chatbox-message-item received">
                    <span class="chatbox-message-item-text">
                        Thank you for your awesome support!
                    </span>
                    <span class="chatbox-message-item-time">${addZero(today.getHours())}:${addZero(today.getMinutes())}</span>
                </div>
            `;
            chatboxMessageWrapper.insertAdjacentHTML('beforeend', message);
            scrollBottom();
        }

        function scrollBottom() {
            chatboxMessageWrapper.scrollTo(0, chatboxMessageWrapper.scrollHeight);
        }

        function isValid(value) {
            return value.trim().length > 0; // Simplified validity check
        }

        function addZero(num) {
            return num < 10 ? '0' + num : num;
        }
    }, []);

  return (
    <>
       <div className='right-content w-100'>
        <div className='card shadow border-0 w-100 flex-row p-4 justify-content-between align-items-center res-col'>
            <h5 className='mb-0'>Seller Account</h5>
            <Breadcrumbs aria-label='breadcrumb' className='ml-auto breadcrumbs_'>
            <StyledBreadcrumb
            component="a"
            href="/dashboard"
            label="Dashboard"
            icon={<HomeIcon fontSize='small'/>}
            />

            <StyledBreadcrumb
            label="Seller Account"
            component="a"
            href="/seller"
            />

            </Breadcrumbs>
        </div>
        <div className='card shadow border-0 w-100 flex-row p-4 justify-content-between align-items-center res-col'>
            
            <div className='shadow mt-4 p-4'>
                <h3 className='mb-4 font-bold'>Sales Report</h3>
                <AreaChart
                    width={990}
                    height={400}
                    data={data}
                    margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area
                    connectNulls
                    type="monotone"
                    dataKey="uv"
                    stroke="#8884d8"
                    fill="#8884d8"
                    />
                </AreaChart>
            </div>
        </div>
        <div className='card shadow border-0 w-100 flex-row p-4 justify-content-between align-items-center res-col'>
            <h3 className='mb-4 font-bold'>Best Selling Products</h3>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              

            <div className='Total_Sales'>

            </div>













            </div>
        </div>
        <div class="chatbox-wrapper">
            <div class="chatbox-toggle">
                <i class='bx bx-message-dots'></i>
                <IoChatboxEllipses className='chatBox_Icon'/>
            </div>
            <div class="chatbox-message-wrapper">
                <div class="chatbox-message-header">
                    <div class="chatbox-message-profile">
                        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" class="chatbox-message-image" />
                        <div>
                            <h4 class="chatbox-message-name">Jonathan Doe</h4>
                            <p class="chatbox-message-status">online</p>
                        </div>
                    </div>
                    <div class="chatbox-message-dropdown">
                        <i class='bx bx-dots-vertical-rounded chatbox-message-dropdown-toggle'></i>
                    </div>
                </div>
                <div class="chatbox-message-content">
                    <h4 class="chatbox-message-no-message">You don't have message yet!</h4>
                    {/* <div class="chatbox-message-item sent">
                        <span class="chatbox-message-item-text">
                            Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Quod, fugiat?
                        </span>
                        <span class="chatbox-message-item-time">08:30</span>
                    </div>
                    <div class="chatbox-message-item received">
                        <span class="chatbox-message-item-text">
                            Lorem, ipsum, dolor sit amet consectetur adipisicing elit. Quod, fugiat?
                        </span>
                        <span class="chatbox-message-item-time">08:30</span>
                    </div>  */}
                </div>
                <div class="chatbox-message-bottom">
                    <form action="#" class="chatbox-message-form">
                        <textarea rows="1" placeholder="Type message..." class="chatbox-message-input"></textarea>
                        <button type="submit" class="chatbox-message-submit"><i class='bx bx-send' ></i></button>
                    </form>
                </div>
            </div>
	    </div>
    </div>
    </>
  );
}

export default SellerAcount;
