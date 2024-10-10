export interface Project{
     title: string;
     thumbnail:string;
     detailLink:string;
     repoLink:string;
     skillUse :Array<{
        skillName:string,
        skillImage:string
     }>

}