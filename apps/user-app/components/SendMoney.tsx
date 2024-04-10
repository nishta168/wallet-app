"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Center } from "@repo/ui/center";
import { TextInput } from "@repo/ui/textinput";
import { useState } from "react";
import { p2ptransfer } from "../app/lib/actions/p2ptransfer";

export default function () {
    const [number, setNumber] = useState('');
    const [amount, setAmount] = useState('');
    
    return <div className="h-[90vh]">
            <Center>
                <Card title="Send">
                    <div className="min-w-72 pt-2">
                        <TextInput label="Number" placeholder="Number" onChange={(value)=>{setNumber(value)}}></TextInput>  
                        <TextInput label="Amount" placeholder="Amount" onChange={(value)=> {setAmount(value)}}></TextInput>
                        <div className="mt-5 flex justify-center">
                            <Button onClick={async()=>{
                                await p2ptransfer(number,Number(amount)*100)
                            }}>Send</Button>
                        </div>
                    </div>
                </Card>
            </Center>
    </div>
}