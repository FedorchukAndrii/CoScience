import { Injectable } from '@nestjs/common';
import { InterestDto } from 'src/auth/dto/interest.dto';
import { INTERESTS } from 'src/mocks/interests';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdministrationService {
    constructor(private prisma: PrismaService) {}

    async getUsers() {
        const users = await this.prisma.user.findMany();

        return users;
    }

    async getInterests() {
        const interests = await this.prisma.interest.findMany();
        if (!interests || interests.length === 0) {
            INTERESTS.forEach(interest => {
                this.addInterest(interest);
                interests.push(interest);
            });
        }

        return interests;
    }

    async addInterest(interest: InterestDto) {
        const newInterest = await this.prisma.interest.create({
            data: {
                id: interest.id,
                name: interest.name,
                description: interest.description,
                focus: interest.focus                
            }
        })
    }
}
