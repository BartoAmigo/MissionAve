import {Group} from "../interfaces/group";

export const MOCKGROUPS: Group[] = [
  { groupId: 1, groupName: "Punks", groupEvents:[
      {eventId:1, eventTitle: "Punk Party", eventDes: "Just a Punk Party", eventImg: "assets/PunkEvent.jpg"},
      {eventId:2, eventTitle: "Punk Fiesta", eventDes: "bitches invited", eventImg:""}],
  },
  { groupId: 2, groupName: "Goths", groupEvents:[
      { eventId: 1, eventTitle: "Goth Party", eventDes: "Just a party.", eventImg:"assets/GothEvent.jpeg"},
      {eventId:2, eventTitle: "Goth Fiesta", eventDes:"Goth bitches only", eventImg:""}],
  }
];


/*export const GROUPS: [
    {

      groupName: "Punks",
      events: [{
        eventName: "Backyard Concert",
        imageUrl: "assets/PunkEvent.jpg",
        buttonLink: "groups",
        eventDesc: "We are having a party brah."
      },
        {
          eventName: "Fuck those other guys",
          imageUrl: "https://ww2.kqed.org/app/uploads/sites/10/2016/06/LosPunksCover-1920x1139.jpg",
          buttonLink: "groups",
          eventDesc: "Our backyard show will be far radder, located next door."
        },
        {
          eventName: "Little company pow wow, byob",
          imageUrl: "https://images.vice.com/noisey/content-images/contentimage/93083/PHO-AngelaBoatwright-007-08012014.jpg",
          buttonLink: "groups",
          eventDesc: "Greg killed a tarantula at my last party, fuck you Greg. Everyone else may come"
        }]

    },
    {

      groupName: "Goth",

      events: [{
        eventName: "like, a thing or something",
        imageUrl: "https://photos.bandsintown.com/thumb/12502147.jpeg",
        buttonLink: "groups",
        eventDesc: "Idk who these people are, this is for testing"
      },
        {
          eventName: "party",
          imageUrl: "assets/GothEvent.jpg",
          buttonLink: "groups"
        },
        {
          eventName: "party",
          imageUrl: "assets/GothEvent.jpg",
          buttonLink: "groups"
        }]

      }
    ]
  }

 */
