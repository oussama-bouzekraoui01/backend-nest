import {Body,Post, Controller, Delete, Get, Param, Patch, Put} from "@nestjs/common";
import {ProjectService} from "./project.service";
import {Project} from "@prisma/client"

@Controller('projects')
export class ProjectController {

    constructor(
        private projectService: ProjectService,
    ) {}

    @Get('')
    getProjects() {
        return this.projectService.getProjects();
    }

    @Get(':id')
    getProjectById(@Param('id') id: number) {
        return this.projectService.getProjectById(id);
    }

    @Post('add')
    createProject(@Body() project: Project) {
        return this.projectService.createProject(project);
    }

    @Put('edit/:id')
    editProject(@Param('id') id: string, @Body() edited : Project) {
        return this.projectService.editProject(id, edited);
    }

    @Delete ('delete/:id')
    deleteProject(@Param('id') id: string) {
        return this.projectService.deleteProject(id);
    }


}
