-- CreateTable
CREATE TABLE "penlight" (
    "penlight_id" INTEGER NOT NULL,
    "color_name_jn" TEXT NOT NULL,
    "color_name_en" TEXT NOT NULL,

    CONSTRAINT "penlight_pkey" PRIMARY KEY ("penlight_id")
);

-- CreateTable
CREATE TABLE "penlight_quiz" (
    "member_id" SERIAL NOT NULL,
    "member_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "member_image" TEXT NOT NULL,
    "member_color_id_left" INTEGER NOT NULL,
    "member_color_id_right" INTEGER NOT NULL,
    "nickname" TEXT NOT NULL,
    "member_info" TEXT NOT NULL,

    CONSTRAINT "penlight_quiz_pkey" PRIMARY KEY ("member_id")
);
