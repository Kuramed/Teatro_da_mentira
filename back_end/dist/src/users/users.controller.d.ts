import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
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
    findOne(id: string): import("@prisma/client").Prisma.Prisma__UserClient<{
        email: string;
        name: string | null;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateUserDto: UpdateUserDto): import("@prisma/client").Prisma.Prisma__UserClient<{
        email: string;
        name: string | null;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__UserClient<{
        email: string;
        name: string | null;
        password: string;
        createdAt: Date;
        updatedAt: Date;
        id: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
