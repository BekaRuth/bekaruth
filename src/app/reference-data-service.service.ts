import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ReferenceDataService {
  getNavImages() {
    return [
      {name: 'home', white: '../../assets/nav-images/home_white.png', purple: '../../assets/nav-images/home_purple.png', current: '../../assets/nav-images/home_white.png'},
      {name: 'bio', white: '../../assets/nav-images/bio_white.png', purple: '../../assets/nav-images/bio_purple.png', current: '../../assets/nav-images/bio_white.png'},
      {name: 'resume', white: '../../assets/nav-images/resume_white.png', purple: '../../assets/nav-images/resume_purple.png', current: '../../assets/nav-images/resume_white.png'},
      {name: 'music', white: '../../assets/nav-images/music_white.png', purple: '../../assets/nav-images/music_purple.png', current: '../../assets/nav-images/music_white.png'},
      {name: 'twitter', white: '../../assets/nav-images/twitter_white.png', purple: '../../assets/nav-images/twitter_purple.png', current: '../../assets/nav-images/twitter_white.png'},
      {name: 'twitch', white: '../../assets/nav-images/twitch_white.png', purple: '../../assets/nav-images/twitch_purple.png', current: '../../assets/nav-images/twitch_white.png'},
      {name: 'games', white: '../../assets/nav-images/games_white.png', purple: '../../assets/nav-images/games_purple.png', current: '../../assets/nav-images/games_white.png'},      
      {name: 'instagram', white: '../../assets/nav-images/instagram_white.png', purple: '../../assets/nav-images/instagram_purple.png', current: '../../assets/nav-images/instagram_white.png'},
      {name: 'projects', white: '../../assets/nav-images/projects_white.png', purple: '../../assets/nav-images/projects_purple.png', current: '../../assets/nav-images/projects_white.png'},
      {name: 'random', white: '../../assets/nav-images/random_white.png', purple: '../../assets/nav-images/random_purple.png', current: '../../assets/nav-images/random_white.png'},
      {name: 'interior-design', white: '../../assets/nav-images/interior_design_white.png', purple: '../../assets/nav-images/interior_design_purple.png', current: '../../assets/nav-images/interior_design_white.png'}
    ]
  }

  getInteriorDesignImages(): Array<string> {
    return [
      '../../assets/interior-design/dining-room.jpg',
      '../../assets/interior-design/couch-pillows.jpg',
      '../../assets/interior-design/deck.jpg',
      '../../assets/interior-design/living-room.jpg',
      '../../assets/interior-design/living-room2.jpg',
      '../../assets/interior-design/messy-desk.jpg',
      '../../assets/interior-design/music-corner.jpg',
      '../../assets/interior-design/office-futon.jpg',
      '../../assets/interior-design/tray.jpg',
      '../../assets/interior-design/air-plants.jpg'
    ];
  }
}
