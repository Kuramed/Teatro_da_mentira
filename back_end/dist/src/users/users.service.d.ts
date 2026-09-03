import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createUserDto: CreateUserDto): import("@prisma/client").Prisma.Prisma__UserClient<{
        email: string;
        name: string | null;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        email: string;
        name: string | null;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }[]>;
    findOne(id: number): import("@prisma/client").Prisma.Prisma__UserClient<{
        email: string;
        name: string | null;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, updateUserDto: UpdateUserDto): import("@prisma/client").Prisma.Prisma__UserClient<{
        email: string;
        name: string | null;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__UserClient<{
        email: string;
        name: string | null;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
