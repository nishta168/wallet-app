-- CreateTable
CREATE TABLE "P2PTrasnfer" (
    "id" SERIAL NOT NULL,
    "fromUserId" INTEGER NOT NULL,
    "toUserId" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "P2PTrasnfer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "P2PTrasnfer" ADD CONSTRAINT "P2PTrasnfer_fromUserId_fkey" FOREIGN KEY ("fromUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "P2PTrasnfer" ADD CONSTRAINT "P2PTrasnfer_toUserId_fkey" FOREIGN KEY ("toUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
