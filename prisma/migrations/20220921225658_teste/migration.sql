-- DropIndex
DROP INDEX "Motorista_validade_cnh_key";

-- AlterTable
ALTER TABLE "Motorista" ALTER COLUMN "validade_cnh" DROP NOT NULL,
ALTER COLUMN "validade_cnh" SET DATA TYPE TEXT;
