import express from 'express';
import { prisma } from '@repo/db';

const app = express();
app.use(express.json());

app.post('/hdfcWebhook', async (req, res) => {
    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount,
    }

    try{
    await prisma.$transaction([
        prisma.balance.update({
        where: {
            userId: paymentInformation.userId
        },
        data: {
            amount: {
                increment: paymentInformation.amount
            }
        }
    
    }),

    prisma.onRampTransaction.update({
        where: {
            token: paymentInformation.token
        },
        data: {
            status: 'Success'
        }

    })
])

    res.status(200).json({ message: 'Payment processed successfully' });
    } catch (error) {
        console.error('Error processing payment:', error);
        res.status(411).json({ message: 'Internal server error' });
    }
})

app.listen(3003)