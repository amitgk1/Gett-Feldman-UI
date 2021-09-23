export enum ROUTES {
    login = "/",
    signup = "/signup",
    addRide = "/addRide",
    rideById = "/ride:id"
}

export const COURSES = ["MMS", "Eitam", "Segev",] as const
export type Course = typeof COURSES[number]

export const ROLES = ["Course Commander", "Commander", "Student",] as const
export type Role = typeof ROLES[number]