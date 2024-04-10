import { Card } from "@repo/ui/card"

export default function P2PTransactions({
        transactions,
        thisUserId
    }: {
        transactions: {
            toUser: {
                name: string | null,
                number: string
            }
            toUserId: number,
            amount: number,
            timestamp: Date,
        }[] | undefined;
        thisUserId: number
    }) {
        if(transactions === undefined || !transactions.length){
            return <Card title="Recent Transactions">
               <div className="text-center pb-8 pt-8">
                     No Recent transactions
                </div>
            </Card>
        }
    console.log(thisUserId)
        transactions = transactions.sort((a: {
            toUser: {
                name: string | null,
                number: string
            }
            toUserId: number,
            amount: number,
            timestamp: Date,
        }, b: {
            toUser: {
                name: string | null,
                number: string
            }
            toUserId: number,
            amount: number,
            timestamp: Date,
        }) => b.timestamp.getTime() - a.timestamp.getTime());
        return <Card title="Recent Transactions">
            {transactions.map( x => <div className="pt-4">
                <div className="text-slate-600 text-xs">
                    {x.timestamp.toDateString()}
                </div>
                <div className="flex border-b pb-2">                
                    <div className="text-sm self-center min-w-fit">
                        {x.toUserId == thisUserId ? "Received INR from" : "Sent INR to"}
                    </div>  
                    <div className="flex self-center justify-between w-full ml-1 font-semibold">
                        <div>
                            {x.toUser.name}
                        </div >                
                        <div className={x.toUserId == thisUserId ? "text-green-500 " : "text-red-500"}>
                            {x.toUserId == thisUserId ? "+" : "-"} ₹{x.amount/100}
                        </div>
                    </div>
                
                </div>
            </div>)}
        </Card>

}