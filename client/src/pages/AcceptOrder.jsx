import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { UserContext } from '../../context/userContext';
import { useNavigate, useParams } from "react-router-dom";


export default function AcceptOrder (){
    const {orderId} = useParams(); //returns :orderId, want just orderId
    const actualOrderId = orderId.substring(1);
    const {user, fetchUserData} = useContext(UserContext);
    const navigate = useNavigate();
    const [orderDetails, setOrderDetails] = useState(null);

    const fetchOrderDetails = async() => {
        try {
            const response = await axios.get(`/getorder?orderId=${actualOrderId}`);
            setOrderDetails(response.data.orderDetails);
            console.log(orderDetails)
        } catch (error) {
            console.log(error)
        }

        
    }


    const acceptOrder = async () => {
        try{
            const delivery_username = user.username;
            const {response} = await axios.post('/acceptorder', {orderId, delivery_username});
            if(response.error){
                console.log("ERROR")
            }
            else{
                await fetchUserData();
                navigate('/deliverydashboard');
            }
    
        }catch(error){
            console.log(error);
        }
        
    }

    useEffect(() => {
        fetchOrderDetails();
        console.log(orderDetails);
        fetchUserData();

    }, [])

    return (
        <div>
            <h1>Accept order?</h1> <br />
            <h2>Order details:</h2> <br />
            {!!orderDetails && (<div>
                <strong>Dining hall:</strong> {orderDetails.dining_hall}<br />
                <strong>Order:</strong> {orderDetails.food_order}<br />
                <strong>Ordered by:</strong> {orderDetails.creator_username}<br />
                <strong>Delivery address:</strong> {orderDetails.creator_address}<br />


            </div>)}
            

        </div>
    )

}

