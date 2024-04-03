-- CreateTable
CREATE TABLE "member" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT NOT NULL,
    "penlightLeft" INTEGER NOT NULL,
    "penlightRight" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "member_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "memberInfo" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "info" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "memberInfo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "memberImage" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "official" TEXT NOT NULL,
    "fifthAnniversary" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "memberImage_pkey" PRIMARY KEY ("id")
);
