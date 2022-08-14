import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Group } from 'src/app/interfaces/group';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const groups:Group[] = [
      {
  
      name: "Punks",
      groupEvents: [{
        title: "Backyard Concert",
        imgUrl: "assets/PunkEvent.jpg",
        link: "groups",
        desc: "We are having a party brah.",
      },
      {
        title: "Fuck those other guys",
        imgUrl: "https://ww2.kqed.org/app/uploads/sites/10/2016/06/LosPunksCover-1920x1139.jpg",
        link: "groups",
        desc: "Our backyard show will be far radder, located next door."
      },
      {
        title: "Little company pow wow, byob",
        imgUrl: "https://images.vice.com/noisey/content-images/contentimage/93083/PHO-AngelaBoatwright-007-08012014.jpg",
        link: "groups",
        desc: "Greg killed a tarantula at my last party, fuck you Greg. Everyone else may come"
      }]
  
      },
      {
        name: "Goth",
  
        groupEvents: [{
          title: "like, a thing or something",
          imgUrl: "https://photos.bandsintown.com/thumb/12502147.jpeg",
          link: "groups",
          desc: "Idk who these people are, this is for testing"
        },
        {
          title: "party",
          imgUrl: "assets/GothEvent.jpg",
          link: "groups"
        },
        {
          title: "party",
          imgUrl: "assets/GothEvent.jpg",
          link: "groups"
        }]
  
      },
      {
        name: "Mutt",
  
        groupEvents: [{
          title: "like, a thing or something",
          imgUrl: "https://photos.bandsintown.com/thumb/12502147.jpeg",
          link: "groups",
          desc: "Idk who these people are, this is for testing"
        },
        {
          title: "party",
          imgUrl: "assets/GothEvent.jpg",
          link: "groups"
        },
        {
          title: "party",
          imgUrl: "assets/GothEvent.jpg",
          link: "groups"
        }]
  
      },
      {
        name: "Bloom Cab",
  
        groupEvents: [{
          title: "like, a thing or something",
          imgUrl: "https://photos.bandsintown.com/thumb/12502147.jpeg",
          link: "groups",
          desc: "Idk who these people are, this is for testing"
        },
        {
          title: "party",
          imgUrl: "assets/GothEvent.jpg",
          link: "groups"
        },
        {
          title: "party",
          imgUrl: "assets/GothEvent.jpg",
          link: "groups"
        }]
  
      },
      {
        name: "Skate Club",
  
        groupEvents: [{
          title: "like, a thing or something",
          imgUrl: "https://photos.bandsintown.com/thumb/12502147.jpeg",
          link: "groups",
          desc: "Idk who these people are, this is for testing"
        },
        {
          title: "party",
          imgUrl: "assets/GothEvent.jpg",
          link: "groups"
        },
        {
          title: "party",
          imgUrl: "assets/GothEvent.jpg",
          link: "groups"
        }]
  
      },
      {
        name: "Film Club",
  
        groupEvents: [{
          title: "like, a thing or something",
          imgUrl: "https://photos.bandsintown.com/thumb/12502147.jpeg",
          link: "groups",
          desc: "Idk who these people are, this is for testing"
        },
        {
          title: "party",
          imgUrl: "assets/GothEvent.jpg",
          link: "groups"
        },
        {
          title: "party",
          imgUrl: "assets/GothEvent.jpg",
          link: "groups"
        }]
  
      }
    ]
    return groups;
  }
  constructor() { }
}
