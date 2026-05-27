/* global monogatari */

// Define the messages used in the game.
monogatari.action("message").messages({
  Help: {
    title: "Help",
    subtitle: "Some useful Links",
    body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`,
  },
});

// Define the notifications used in the game
monogatari.action("notification").notifications({
  Welcome: {
    title: "Welcome",
    body: "This is the Monogatari VN Engine",
    icon: "",
  },
});

// Define the Particles JS Configurations used in the game
monogatari.action("particles").particles({});

// Define the canvas objects used in the game
monogatari.action("canvas").objects({});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration("credits", {});

// Define the images that will be available on your game's image gallery
monogatari.assets("gallery", {});

// Define the music used in the game.
monogatari.assets("music", {});

// Define the voice files used in the game.
monogatari.assets("voices", {});

// Define the sounds used in the game.
monogatari.assets("sounds", {});

// Define the videos used in the game.
monogatari.assets("videos", {});

// Define the images used in the game.
monogatari.assets("images", {});

// Define the backgrounds for each scene.
monogatari.assets("scenes", {});

// 1. 캐릭터 정의
monogatari.characters({
  p: { name: "주인공", color: "#00bc8c" },
  y: { name: "승민", color: "#ff6699" },
  n: { name: "내레이터", color: "#aaaaaa" },
});

// 2. 호감도 변수 초기화
monogatari.storage({
  test_love: 0,
  gave_gift: "",
  apologized: false,
});

// 3. 게임 스크립트
monogatari.script({
  // ──────────────────────────────────────────
  // DAY 1
  // ──────────────────────────────────────────
  Start: [
    "n 어느 맑은 오후, 학교 복도에서 승민를 마주쳤다.",
    "y 안녕? 오늘 나한테 줄 선물 있어?",
    "p (뭔가 기대에 찬 눈빛이네... 어떻게 할까.)",
    {
      Choice: {
        Dialog: "p 승민에게 무엇을 줄까?",
        Candy: {
          Text: "달콤한 사탕을 준다",
          Do: function () {
            monogatari.storage({
              test_love: monogatari.storage("test_love") + 10,
              gave_gift: "candy",
            });
            monogatari.run("jump Day1_Candy"); // 2.02 버전용 강제 점프
          },
        },
        Flower: {
          Text: "길에서 꺾어온 들꽃을 건넨다",
          Do: function () {
            monogatari.storage({
              test_love: monogatari.storage("test_love") + 5,
              gave_gift: "flower",
            });
            monogatari.run("jump Day1_Flower");
          },
        },
        Stone: {
          Text: "상남자식 돌멩이를 던져준다",
          Do: function () {
            monogatari.storage({
              test_love: monogatari.storage("test_love") - 5,
              gave_gift: "stone",
            });
            monogatari.run("jump Day1_Stone");
          },
        },
        Nothing: {
          Text: "아무것도 주지 않는다",
          Do: function () {
            monogatari.storage({
              test_love: monogatari.storage("test_love") - 3,
              gave_gift: "nothing",
            });
            monogatari.run("jump Day1_Nothing");
          },
        },
      },
    },
  ],

  Day1_Candy: [
    "y 와, 사탕이다! 내가 제일 좋아하는 딸기맛이잖아~",
    "p 어, 그냥 편의점에서 고른 건데 맞췄네.",
    "y 우연이래도 기뻐! 고마워, 너 은근 센스 있다?",
    "n 승민의 볼이 살짝 빨개졌다.",
    "jump Day1_End",
  ],

  Day1_Flower: [
    "y 어머, 들꽃이야? 직접 꺾어온 거야?",
    "p 응, 교문 앞에 피어 있길래.",
    "y 흐음... 낭만적이긴 한데, 다음엔 더 예쁜 거 사줘.",
    "p (칭찬인지 불평인지 모르겠다.)",
    "n 그래도 승민는 꽃을 가방에 조심스럽게 꽂았다.",
    "jump Day1_End",
  ],

  Day1_Stone: [
    "y ...이게 뭐야. 돌멩이?",
    "p 세상에 하나뿐인 특별한 돌이야.",
    "y 특별하긴. 길바닥에 널린 게 돌이잖아.",
    "n 승민는 돌을 도로 돌려줬다. 기분이 상한 게 역력하다.",
    "p (아, 실패한 것 같은데...)",
    "jump Day1_End",
  ],

  Day1_Nothing: [
    "y 에? 아무것도 없어?",
    "p 미, 미안. 오늘 깜빡했어.",
    "y 치, 기대했는데. 내일은 꼭 가져와.",
    "n 승민는 입을 삐죽이며 돌아섰다.",
    "jump Day1_End",
  ],

  Day1_End: [
    "n 승민와 헤어진 뒤 집으로 돌아오며 생각에 잠겼다.",
    "p (내일은 어떻게 대해야 할까... 좀 더 잘해주고 싶은데.)",
    "jump Day2_Start",
  ],

  // ──────────────────────────────────────────
  // DAY 2
  // ──────────────────────────────────────────
  Day2_Start: [
    "n 다음 날 점심 시간, 승민가 교실로 찾아왔다.",
    "y 나 오늘 도서관 가려고 하는데, 같이 갈래?",
    {
      Choice: {
        Dialog: "어떻게 대답할까?",
        Yes: {
          Text: "좋아, 같이 가자!",
          Do: function () {
            monogatari.storage({
              test_love: monogatari.storage("test_love") + 5,
            });
            monogatari.run("jump Day2_Library");
          },
        },
        Busy: {
          Text: "오늘은 좀 바빠서...",
          Do: function () {
            monogatari.storage({
              test_love: monogatari.storage("test_love") - 3,
            });
            monogatari.run("jump Day2_Reject");
          },
        },
      },
    },
  ],

  Day2_Library: [
    "n 둘이 함께 도서관에 들어섰다. 오후의 햇살이 창문을 통해 조용히 쏟아졌다.",
    "y 나 사실 좋아하는 소설 시리즈가 있어. 여기 있는지 찾아보려고.",
    "p 어떤 시리즈야?",
    "y 음... '별이 지는 계절' 이라고. 읽어봤어?",
    {
      Choice: {
        Dialog: "솔직하게 대답하자.",
        Read: {
          Text: "응, 나도 좋아해! 3권이 제일 좋더라.",
          Do: function () {
            monogatari.storage({
              test_love: monogatari.storage("test_love") + 8,
            });
            monogatari.run("jump Day2_Book_Match");
          },
        },
        NotRead: {
          Text: "아니, 처음 들어보는데. 어떤 내용이야?",
          Do: function () {
            monogatari.storage({
              test_love: monogatari.storage("test_love") + 3,
            });
            monogatari.run("jump Day2_Book_Explain");
          },
        },
      },
    },
  ],

  Day2_Book_Match: [
    "y 진짜?! 나도 3권이 제일 좋아! 마지막 장면에서 울었잖아.",
    "p 맞아, 두 사람이 다시 만나는 장면.",
    "y 어머, 딱 맞아. 넌 역시 취향이 좋다.",
    "n 승민의 눈이 반짝였다. 처음으로 서로가 진짜 통한다는 느낌이 들었다.",
    "jump Day2_End",
  ],

  Day2_Book_Explain: [
    "y 오, 알려줄게! 두 사람이 헤어졌다가 긴 시간이 흘러 다시 만나는 이야기야.",
    "p 왠지 슬프면서도 따뜻할 것 같다.",
    "y 맞아, 딱 그런 느낌! 너 감수성 있네.",
    "n 승민가 책을 한 권 골라 건네줬다.",
    "y 한번 읽어봐. 읽으면 나한테 소감 꼭 말해줘.",
    "jump Day2_End",
  ],

  Day2_Reject: [
    "y 그래? 뭐, 어쩔 수 없지.",
    "n 승민는 혼자 도서관으로 걸어갔다.",
    "p (좀 더 같이 있어줄 걸 그랬나...)",
    "n 그날 오후, 혼자 교실에 앉아 있자니 괜히 허전한 기분이 들었다.",
    "jump Day2_End",
  ],

  Day2_End: [
    "n 방과 후, 교문 앞에서 다시 승민와 마주쳤다.",
    "y 오늘 즐거웠어. 내일 점심도 같이 먹을래?",
    "p (승민가 먼저 제안하는 건 처음이네.)",
    {
      Conditional: {
        Condition: function () {
          return monogatari.storage("test_love") >= 18;
        },
        True: "jump Day3_High",
        False: "jump Day3_Low",
      },
    },
  ],

  // ──────────────────────────────────────────
  // DAY 3 — 호감도 높을 때
  // ──────────────────────────────────────────
  Day3_High: [
    "n 다음 날 점심, 승민가 도시락을 두 개 들고 나타났다.",
    "y 오늘 내가 만들어봤어. 맛없으면 솔직히 말해도 돼.",
    "p (직접 만들었다고? 심장이 왜 이렇게 빨리 뛰지.)",
    "p 고마워, 잘 먹을게.",
    "n 둘이 나란히 옥상에 앉아 도시락을 폈다.",
    "y 있잖아... 어제 도서관에서 진짜 재밌었어. 이런 사람이 내 주변에 있었구나 싶어서.",
    "p 나도. 승민 생각보다 훨씬 재밌는 애더라.",
    "y 생각보다라니, 그게 무슨 말이야!",
    "p 아, 미안. 처음엔 좀 차가운 애인 줄 알았거든.",
    "y 흥, 나 원래 처음 보는 사람한텐 낯을 가려.",
    "n 승민가 살짝 삐쳤지만 곧 웃음을 터뜨렸다.",
    "n 도시락을 다 먹고, 둘이 나란히 하늘을 올려다봤다.",
    "y 저 구름 봐. 꼭 고양이 같지 않아?",
    "p 음... 나는 토끼 같은데.",
    "y 어디가? 귀가 없잖아.",
    "p 저기 작은 게 귀지.",
    "y 억지다, 억지.",
    "n 잠시 침묵이 흘렀다. 나쁘지 않은 침묵이었다.",
    "y 있잖아, 나... 너한테 하고 싶은 말이 있어.",
    "p (심장이 또 쿵 내려앉는 것 같다.)",
    {
      Choice: {
        Dialog: "어떻게 반응할까?",
        Wait: {
          Text: "조용히 기다린다",
          Do: function () {
            monogatari.storage({
              test_love: monogatari.storage("test_love") + 5,
            });
            monogatari.run("jump Day3_Confession_Listen");
          },
        },
        Ask: {
          Text: "뭔데? 말해봐.",
          Do: function () {
            monogatari.storage({
              test_love: monogatari.storage("test_love") + 3,
            });
            monogatari.run("jump Day3_Confession_Ask");
          },
        },
      },
    },
  ],

  Day3_Confession_Listen: [
    "n 주인공은 말없이 승민를 바라봤다.",
    "y ...고마워. 요즘 힘든 일이 좀 있었는데, 네가 옆에 있어줘서 덜 힘들었어.",
    "p 그런 거였어? 말해줬으면 됐는데.",
    "y 그냥 말 잘 못하는 성격이야. 그래도 오늘 말할 수 있어서 다행이야.",
    "n 승민의 목소리가 작게 떨렸다.",
    "jump Day3_High_End",
  ],

  Day3_Confession_Ask: [
    "y 아, 갑자기 물어보니까 부끄럽잖아.",
    "p 미안, 그냥 궁금해서.",
    "y ...사실, 요즘 힘든 일이 있어서. 네 덕에 좀 나아지고 있다는 말 하고 싶었어.",
    "p 나 별로 한 것도 없는데.",
    "y 그냥 있어줬잖아. 그게 제일 큰 거야.",
    "jump Day3_High_End",
  ],

  Day3_High_End: [
    "n 수업 종이 울렸다. 두 사람은 천천히 일어났다.",
    "y 다음에도 같이 밥 먹자.",
    "p 응, 당연하지.",
    "n 승민가 먼저 계단을 내려갔다. 주인공은 그 뒷모습을 잠시 바라봤다.",
    "p (이 감정이... 뭔지는 모르겠지만, 나쁘지 않다.)",
    "jump Final_Check",
  ],

  // ──────────────────────────────────────────
  // DAY 3 — 호감도 낮을 때
  // ──────────────────────────────────────────
  Day3_Low: [
    "n 다음 날 점심, 승민는 혼자 창가에 앉아 있었다.",
    "p 승민야, 같이 먹자.",
    "y ...응, 그래.",
    "n 어딘지 모르게 어색한 분위기였다.",
    "p (뭔가 잘못된 것 같은데. 어떻게 풀어야 하지.)",
    {
      Choice: {
        Dialog: "어떻게 분위기를 바꿀까?",
        Apology: {
          Text: "솔직하게 사과한다",
          Do: function () {
            monogatari.storage({
              test_love: monogatari.storage("test_love") + 7,
              apologized: true,
            });
            monogatari.run("jump Day3_Apology");
          },
        },
        Joke: {
          Text: "가벼운 농담으로 넘긴다",
          Do: function () {
            monogatari.storage({
              test_love: monogatari.storage("test_love") - 2,
            });
            monogatari.run("jump Day3_Joke_Fail");
          },
        },
      },
    },
  ],

  Day3_Apology: [
    "p 있잖아, 요 며칠 내가 좀 무심했던 것 같아. 미안.",
    "y ...갑자기 왜?",
    "p 그냥, 승민가 기분 안 좋아 보여서.",
    "y ...알아옜어?",
    "n 승민는 잠시 말이 없었다가 작게 웃었다.",
    "y 됐어, 신경 써줘서 고마워. 나도 좀 예민했어.",
    "jump Day3_Low_End",
  ],

  Day3_Joke_Fail: [
    "p 왜 이렇게 분위기가 무거워~ 내가 개그 한 방 할까?",
    "y ...괜찮아.",
    "n 승민는 짧게 대답하고 밥에만 집중했다.",
    "p (역효과가 난 것 같다.)",
    "jump Day3_Low_End",
  ],

  Day3_Low_End: [
    "n 점심 시간이 끝나고 두 사람은 각자의 자리로 돌아갔다.",
    "p (아직 늦지 않았겠지. 조금씩 더 잘해줘야겠어.)",
    "jump Final_Check",
  ],

  // ──────────────────────────────────────────
  // 최종 호감도 판정
  // ──────────────────────────────────────────
  Final_Check: [
    "n 며칠이 지났다. 오늘은 왠지 분기점이 될 것 같은 하루다.",
    {
      Conditional: {
        Condition: function () {
          return monogatari.storage("test_love") >= 30;
        },
        True: "jump Route_Perfect",
        False: "jump Final_Check_Mid",
      },
    },
  ],

  Final_Check_Mid: [
    {
      Conditional: {
        Condition: function () {
          return monogatari.storage("test_love") >= 15;
        },
        True: "jump Route_Love",
        False: "jump Route_Bad",
      },
    },
  ],

  // ──────────────────────────────────────────
  // 엔딩
  // ──────────────────────────────────────────
  Route_Perfect: [
    "n 방과 후, 승민가 교문 앞에서 기다리고 있었다.",
    "y 있잖아... 오늘 같이 산책하지 않을래?",
    "p 좋아.",
    "n 두 사람은 학교 근처 작은 공원을 나란히 걸었다.",
    "y 저 있잖아... 처음 만났을 때는 그냥 평범한 사람인 줄 알았어.",
    "p 지금은?",
    "y 지금은... 특별한 사람인 것 같아.",
    "n 해가 서쪽으로 기울며 두 사람의 그림자를 길게 늘였다.",
    "p 나도 그래. 승민는 나한테 특별해.",
    "y ...바보같이 왜 그런 말을 쑥스럽지도 않게 해.",
    "n 승민가 작게 웃으며 주인공의 손등을 살짝 쳤다.",
    "n 그 순간, 주인공은 이 시간을 오래 기억하게 될 것 같다는 걸 직감했다.",
    "p (이게 좋아하는 감정이라면... 나는 분명히, 승민를 좋아한다.)",
    "n ──── 퍼펙트 엔딩 ────",
    "end",
  ],

  Route_Love: [
    "n 승민가 오늘따라 조심스럽게 말을 건넸다.",
    "y 있잖아, 나 요즘 너랑 있으면 좀 편해. 그냥... 그런 것 같아서.",
    "p 나도. 승민랑 있으면 좋거든.",
    "y 정말?",
    "p 응, 정말.",
    "n 승민가 살며시 미소를 지었다. 무언가가 천천히 시작되는 것 같은 하루였다.",
    "n ──── 해피 엔딩 ────",
    "end",
  ],

  Route_Bad: [
    "n 그날 이후, 승민는 점점 주인공과 거리를 뒀다.",
    "y (복도에서 스치며) ...안녕.",
    "p 안녕.",
    "n 짧은 인사만 오갈 뿐, 예전처럼 이야기를 나누는 일은 없어졌다.",
    "p (나는 무엇을 잘못한 걸까. 아니면 처음부터 잘못된 방식이었을까.)",
    "n 창문 너머로 승민가 다른 친구들과 웃으며 이야기하는 모습이 보였다.",
    "p (그 웃음이, 내게는 이제 멀게 느껴진다.)",
    "n ──── 배드 엔딩 ────",
    "end",
  ],
});
