"use server";

import { auth } from '@/auth'
import Project from '@/types/models/ProjectModel';
import { fetchData } from '@/utils/fetchData';

export const getProjects = async () => {
    const session = await auth()

    const data = await fetchData<Project>({
        uri: "project", 
        method: "GET", 
        accessToken: session?.user.accessToken,
    });

    return data
}

export const getProjectsOfUser = async () => {
    const session = await auth()

    const data = await fetchData<Project>({
        uri: "project/user", 
        method: "GET", 
        accessToken: session?.user.accessToken,
    });

    return data
}