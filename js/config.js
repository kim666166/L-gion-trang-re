/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.06
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "GRS™ CityRP";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/1.jpg",
	"backgrounds/images/2.jpg",
	"backgrounds/images/3.jpg",
	"backgrounds/images/4.jpg",
	"backgrounds/images/5.jpg",
	"backgrounds/images/6.jpg",
	"backgrounds/images/7.jpg",
	"backgrounds/images/8.jpg",
	"backgrounds/images/9.jpg",
	"backgrounds/images/10.jpg",
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

 /*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;
/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "Ev1QQILkXAM", name: "f(x) - Goodbye Summer (Amber+Luna+Krystal) (Feat. D.O. of EXO-K) "},
 	{youtube: "rtQWxollrkQ", name: "RADWIMPS – なんでもないや (movie ver.) / Nandemonaiya "},
	{youtube: "Vh7iHrD7PR4", name: "RADWIMPS - スパークル (movie ver.) / Sparkle "},
	{youtube: "PDSkFeMVNFs", name: "RADWIMPS - 前前前世 (movie ver.) / Zenzenzense "},
	{youtube: "37aGnzx-7b0", name: "RADWIMPS - 夢灯籠 / Dream lantern "},
	{youtube: "dsWDUvuF0Xc", name: "Florence + The Machine - Wish That You Were Here "},
	{youtube: "oBKpJiVEcnU", name: "박효신 - 숨 "},
	{youtube: "BiQIc7fG9pA", name: "gnash - i hate u, i love u (feat. olivia o'brien) "},
	{youtube: "upZ_q9CdXl4", name: "Taylor Swift - 22 "},
	{youtube: "vBLQFGHtSzg", name: "Charlie Puth - Up All Night "},
	{youtube: "ZK7hdWwIEkI", name: "Maroon 5 - Unkiss Me "},
	{youtube: "BViqzmDiTVY", name: "Mika - Origin Of Love "},
	{youtube: "o1gLGjPFkRA", name: "The Killers - Mr. BrightSide "},
	{youtube: "xj6fHiF8Osg", name: "Maroon 5 - Maps "},
	{youtube: "IzkxofxsW38", name: "OneRepublic - Counting Stars "},
	{youtube: "18lP9SYCt_E", name: "Ed Sheeran - All Of The Stars "},
	{youtube: "3HJS0b8d-JA", name: "스탠딩 에그(Standing Egg) - 여름밤에 우린  "},
	{youtube: "zPw7lY67uxI", name: "엠씨더맥스(M.C THE MAX) - 어디에도 "},
	{youtube: "JzociagwnBw", name: "정준일 - 안아줘 "},
	{youtube: "UlhR0zBFxZE", name: "소녀시대 - 그 여름 (0805) "},
	{youtube: "pyJlW8V-OoI", name: "어반자카파(Urban Zakapa) - 널 사랑하지 않아 "},
	{youtube: "QLmOezNMPnY", name: "존 박(John Park) - 네 생각 "},
	{youtube: "QTVgoVGojO8", name: "스탠딩 에그(Standing Egg) - 뚝뚝뚝 (with 예슬) "},
	{youtube: "7Qp5vcuMIlk", name: "Ed Sheeran - Castle On The Hill "},
	{youtube: "HDDAhWtpu2E", name: "Shawn Mendes - Like This "},
	{youtube: "fEw1dSIVt0Q", name: "Charlie Puth - Marvin Gaye (feat. Meghan Trainor) "},
    {youtube: "OM1GWVUs5qU", name: "매드클라운 (Mad Clown) - 우리집을 못 찾겠군요 (Feat. 볼빨간사춘기) "},
    {youtube: "vq1XSOXR3Js", name: "Red Velvet (레드벨벳) - Rookie "},		
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 25;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"당신은 현재 프랑스 외인부대로 떠나는 비행기를 탑승하셨습니다!",
"전시 상관 명령 불복종은 사살입니다!",
"신병 모집으로 오셨다면 면접관의 명령을 따라주시기 바랍니다!",
"Designed by Jae Won Kim",
"This Server was made by Jae Won Kim",
"한명의 답답한 장교가 있습니ㄷ....",
"안녕하십니까!"
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
