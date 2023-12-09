import {Injectable, NotFoundException} from "@nestjs/common";
import {PrismaService} from "../prisma/prisma.service";
import {Project} from "@prisma/client"


@Injectable()
export class ProjectService {
    constructor(private prisma: PrismaService) {
    }

    getProjects() {
        return this.prisma.project.findMany();
    }

    getProjectById (projectId: number) {
        return this.prisma.project.findUnique({
            where: {
                id: projectId.toString()
        },});
    }

    async createProject(project: Project) {
        return this.prisma.project.create({
                data: {
                    ...project,
                },
            });
    }

    async editProject(id: string, edited : Project) {
        // get the project by id
        const project =  await this.prisma.project.findUnique({
                where: {
                    id: id,
                },
            });

        if (!project) {
            throw new NotFoundException('there is no project for the id' + id)
        }

        return this.prisma.project.update({
            where: {
                id: id,
            },
            data: {
                ...edited,
            },
        });
    }

    async deleteProject(id: string) {
        // get the project by id
        const project =  await this.prisma.project.findUnique({
            where: {
                id: id,
            },
        });


        if (!project) {
            throw new NotFoundException('there is no project for the id' + id)
        }

        // delete project
        await this.prisma.project.delete({
            where: {
                id: id,
            },
        });
    }
}
