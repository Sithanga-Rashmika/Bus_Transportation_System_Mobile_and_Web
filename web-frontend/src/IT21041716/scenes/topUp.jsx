import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllByUser } from '../actions/topUpAction'
import Header from './header'
import './main.css'
import StripeCheckout from 'react-stripe-checkout'
import { NewTopUp } from '../actions/topUpAction'


const topUp = () => {
    const dispatch = useDispatch()
    const balance = useSelector((state) => state.topUp.balance)
    const topUps = useSelector((state) => state.topUp.topUps)
    const user = useSelector((state) => state.auth.user)
    const [amount, setAmount] = useState('')

    const UID = user.UID

    useEffect(() => {
        if (UID) {
            dispatch(getAllByUser({ UID }));
        }
    }, [dispatch, UID])

    const recentTopups = topUps.slice(Math.max(topUps.length - 8, 0));

    const onToken = (token) => {

    }
    const sendData = () => {
        e.preventDefault();

        const form = {
            UID: UID,
            smartCardID: user.SID,
            fullName: user.fullName,
            contactNo: user.contactNo,
            email: user.email,
            amount: amount
        }

        dispatch(NewTopUp(form))
    }


    return (
        <>
            <Header />
            <div className='mainContainer'>
                <div className='innerDivContainer'>
                    <h2 style={{ color: "white" }}>ACCOUNT BALANCE</h2>
                    <h3 style={{ color: "white" }}>Rs:{balance}.00</h3>
                </div>
                <div className='innerDivContainer' id='innerDivMain'>
                    <div className='smallDiv'>
                        <h4>MOST RECENT TOPUP</h4>
                        <table className="table table-hover" style={{ marginLeft: '2rem', marginTop: '2rem' }}>
                            <tr>
                                <th>No</th>
                                <th>Date</th>
                                <th>Amount</th>
                            </tr>
                            {
                                recentTopups.map((data, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{new Date(data.updatedAt).toLocaleDateString('en-GB')}</td>
                                        <td>{data.amount}.00</td>
                                    </tr>
                                ))
                            }
                        </table>
                    </div>
                    <div className='smallDiv'>
                        <h4>MOST RECENT TRIP FEE</h4>
                        <table class="table table-hover" style={{ marginLeft: '2rem', marginTop: '2rem' }}>
                            <tr>
                                <th>No</th>
                                <th>Date</th>
                                <th>Amount</th>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>12-10-2023</td>
                                <td>115.00</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>12-10-2023</td>
                                <td>115.00</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>12-10-2023</td>
                                <td>115.00</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>12-10-2023</td>
                                <td>115.00</td>
                            </tr>
                        </table>
                    </div>
                    <div className='smallDiv'>
                        <h4>RECHARGE ACCOUNT BALANCE</h4>
                        <span style={{ textAlign: 'justify', width: '300px', marginTop: '1rem' }}>Keep your travel hassle-free by ensuring a sufficient account balance for our CITYLINK public transportation services. Recharge your balance promptly to avoid any interruptions during your travels.</span>
                        <form style={{ textAlign: 'center', marginTop: '2rem' }}>
                            <input type="text" placeholder="Enter recharge amount " style={{ padding: '10px', margin: '10px', borderRadius: '5px', border: '1px solid #ccc' }} value={amount} onChange={(e) => setAmount(e.target.value)} />
                            <br />
                            {/* <button type="submit" style={{ padding: '10px 20px', border: 'none', backgroundColor: '#000347', color: 'white', borderRadius: '5px', cursor: 'pointer' }}>Submit</button> */}
                            <StripeCheckout
                                token={onToken}
                                stripeKey="pk_test_51N4pjFFfj2A5CMYsfVATViFh2bspBm3BWzF6oMNPfO1fYjdjBG3ZHnBxdqo20DQpAxbJdPsZOUmHDxsdChqvmQJ5005Q5nc9xY"
                                onClick={sendData}
                            />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default topUp