export function roleHomePath(user) {
    if (!user) return "/connexion";
    if (user.role === "parent") {
        if (user.registrationStatus === "pending") return "/inscription/en-attente";
        if (user.registrationStatus === "approved_incomplete") return "/inscription/finaliser";
        return "/Parent";
    }
    if (user.role === "admin") return "/Admin";
    if (user.role === "staff") {
        if (user.staffRole === "nourrice") return "/Nourrice";
        if (user.staffRole === "orthophoniste") return "/Orthophonist";
        if (user.staffRole === "psychologue") return "/Psychologue";
    }
    return "/";
}

export default roleHomePath;
