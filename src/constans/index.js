export const sidebarLinks = [
    {
      imgURL: "/assets/home.svg",
      route: "/",
      label: "Inicio",
    },
    {
      imgURL: "/assets/search.svg",
      route: "/buscar",
      label: "Buscar",
    },
    {
      imgURL: "/assets/heart.svg",
      route: "/actividad",
      label: "Actividad",
    },
    {
      imgURL: "/assets/create.svg",
      route: "/crear_publicacion",
      label: "Crear Publicacion",
    },
    {
      imgURL: "/assets/community.svg",
      route: "/comunidades",
      label: "Comunidades",
    },
    {
      imgURL: "/assets/user.svg",
      route: "/profile",
      label: "Perfil",
    },
  ];
  
  export const profileTabs = [
    { value: "threads", label: "Publicaciones", icon: "/assets/reply.svg" },
    { value: "replies", label: "Respuestas", icon: "/assets/members.svg" },
    { value: "tagged", label: "Etiquetados", icon: "/assets/tag.svg" },
  ];
  
  export const communityTabs = [
    { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
    { value: "members", label: "Members", icon: "/assets/members.svg" },
    { value: "requests", label: "Requests", icon: "/assets/request.svg" },
  ];