"use server"

import Razorpay from 'razorpay'
import User from '@/app/models/User'
import Payment from '@/app/models/Payment'
import connectDb from '@/app/db/connectDb'

export const initiate = async (amount, to_username, paymentform) => {
    await connectDb()

    // ": use this if you use razorpay :" \\


    let user = await User.findOne({ username: to_username })
    const id = user.razorpayId
    const Secret = user.razorpaySecret

    var instance = new Razorpay({ key_id: id, key_secret: Secret })
    let options = {
        amount: Number.parseInt(amount) * 100,
        currency: "INR"
    }
    let x = await instance.orders.create(options)
    await Payment.create({ oid: x.id, amount: amount, to_User: to_username, name: paymentform.name, message: paymentform.message })
    return x;


    // ":use this if you not use razorpay:" \\
    // await Payment.create({amount: amount ,to_User:to_username , name:paymentform.name, message:paymentform.message})

}

export const fetchUser = async (username) => {
    await connectDb()
    let a = await User.findOne({ username: username })
    if (a == null) {
        return a
    }
    // alert(a)
    let user = a.toObject({ flattenObjectIds: true })
    return user
}

export const fetchPayment = async (username) => {
    await connectDb()
    let p = await Payment.find({ to_User: username, done: true }).sort({ amount: -1 }).lean()
    return p
}

export const updateProfile = async (data, oldusername) => {
    await connectDb()
    let ndata = Object.fromEntries(data)
    if (oldusername !== ndata.username) {
        const u = await User.findOne({ username: ndata.username })
        if (u) {
            return { error: "username already exist" }
        }
    }

    await User.updateOne({ email: ndata.email }, ndata)
    await Payment.updateMany({ to_User: oldusername }, { to_User: ndata.username })
}