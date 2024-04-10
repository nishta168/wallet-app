import { getServerSession } from "next-auth"
import { authOptions } from "../../lib/auth"
import db from "@repo/db/client"
import P2PTransactions from "../../../components/P2PTransactions";

const getTransactions  = async () => {
    const session = await getServerSession(authOptions);
    if(!session.user){
        return null;
    }
    const transactions = await db.p2PTrasnfer.findMany({
        where: {
            OR: [{
                fromUserId: Number(session.user.id)
            },{
                toUserId: Number(session.user.id)
            }]
        },
        select: {
            toUser: {
                select: {
                    name: true,
                    number: true
                }
            },
            toUserId: true,
            amount: true,
            timestamp: true,
        }
    });
console.log(transactions)
    return {
        transactions,
        session
    } ;
}

export default async function() {
    const props = await getTransactions()
    const transactions = props?.transactions;
    const thisUserId = props?.session.user.id
    return <div className="w-screen">
        <div className="text-4xl text-[#6a51a6] pt-8 mb-8 font-bold">
            Transactions
        </div>
        <div className="mr-4 grid grid-cols-1 md:grid-cols-2">
            <P2PTransactions transactions={transactions} thisUserId={thisUserId}/>
        </div>       
    </div>
}