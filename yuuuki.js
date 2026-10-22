const karutaData = [
    { upper: "<span class='highlight'>あきの</span>たの かりほのいほの とまをあらみ", lower: "わがころもではつゆにぬれつつ",img:"あきの.jpg", length: 16},
    { upper: "<span class='highlight'>はるす</span>ぎて なつきにけらし しろたへの", lower: "ころもほすてふあまのかぐやま" ,img:"はるす.jpg", length: 4},
    { upper: "<span class='highlight'>あし</span>びきの やまどりのをの しだりをの", lower: "ながながしよをひとりかもねむ" ,img:"あし.jpg", length: 16},
    { upper: "<span class='highlight'>たご</span>のうらに うちいでてみれば しろたへの", lower: "ふじのたかねにゆきはふりつつ" ,img:"たご.jpg", length: 6},
    { upper: "<span class='highlight'>おく</span>やまに もみぢふみわけ なくしかの", lower: "こゑきくときぞあきはかなしき" ,img:"おく.jpg", length: 7},
    { upper: "<span class='highlight'>かさ</span>さぎの わたせるはしに おくしもの", lower: "しろきをみればよぞふけにける",img:"かさ.jpg", length: 4 },
    { upper: "<span class='highlight'>あまの</span>はら ふりさけみれば かすがなる", lower: "みかさのやまにいでしつきかも",img:"あまの.jpg", length: 16 },
    { upper: "<span class='highlight'>わがい</span>ほは みやこのたつみ しかぞすむ", lower: "よをうぢやまとひとはいふなり" ,img:"わがい.jpg", length: 7},
    { upper: "<span class='highlight'>はなの</span>いろは うつりにけりな いたづらに", lower: "わがみよにふるながめせしまに" ,img:"はなの.jpg", length: 4},
    { upper: "<span class='highlight'>これ</span>やこの ゆくもかへるも わかれては", lower: "しるもしらぬもあふさかのせき" , img:"これ.jpg",length: 6},
    { upper: "<span class='highlight'>わたのはら や</span>そしまかけて こぎいでぬと", lower: "ひとにはつげよあまのつりぶね" ,img:"わたや.jpg", length: 7},
    { upper: "<span class='highlight'>あまつ</span>かぜ くものかよひぢ ふきとぢよ", lower: "をとめのすがたしばしとどめむ" ,img:"あまつ.jpg", length: 16},
    { upper: "<span class='highlight'>つく</span>ばねの みねよりおつる みなのがは", lower: "こひぞつもりてふちとなりぬる" ,img:"つく.jpg", length: 2},
    { upper: "<span class='highlight'>みち</span>のくの しのぶもぢずり たれゆゑに", lower: "みだれそめにしわれならなくに" ,img:"みち.jpg", length: 5},
    { upper: "<span class='highlight'>きみがため は</span>るののにいでて わかなつむ", lower: "わがころもでにゆきはふりつつ" , img:"きみは.jpg",length: 3},
    { upper: "<span class='highlight'>たち</span>わかれ いなばのやまの みねにおふる", lower: "まつとしきかばいまかへりこむ" ,img:"たち.jpg", length: 6},
    { upper: "<span class='highlight'>ちは</span>やぶる かみよもきかず たつたがは", lower: "からくれないにみづくくるとは" ,img:"ちは.jpg", length: 3},
    { upper: "<span class='highlight'>す</span>みのえの きしによるなみ よるさへや", lower: "ゆめのかよひぢひとめよくらむ" , img:"す.jpg",length: 1},
    { upper: "<span class='highlight'>なにはが</span>た みじかきあしの ふしのまも", lower: "あはでこのよをすぐしてよとや", img:"なにはが.jpg",length: 8 },
    { upper: "<span class='highlight'>わび</span>ぬれば いまはたおなじ なにはなる", lower: "みをつくしてもあはむとぞおもふ" , img:"わび.jpg",length: 7},
    { upper: "<span class='highlight'>いまこ</span>んと いひしばかりに ながつきの", lower: "ありあけのつきをまちいでつるかな" ,img:"いまこ.jpg", length: 3},
    { upper: "<span class='highlight'>ふ</span>くからに あきのくさきの しをるれば", lower: "むべやまかぜをあらしといふらむ" ,img:"ふ.jpg", length: 1},
    { upper: "<span class='highlight'>つき</span>みれば ちぢにものこそ かなしけれ", lower: "わがみひとつのあきにはあらねど" ,img:"つき.jpg", length: 2},
    { upper: "<span class='highlight'>この</span>たびは ぬさもとりあへず たむけやま", lower: "もみぢのにしきかみのまにまに" , img:"この.jpg",length: 6},
    { upper: "<span class='highlight'>なにし</span>おはば あふさかのせきの さねかづら", lower: "ひとにしられでくるよしもがな" ,img:"なにし.jpg", length: 8},
    { upper: "<span class='highlight'>をぐ</span>らやま みねのもみぢば こころあらば", lower: "いまひとたびのみゆきまたなむ" ,img:"おぐ.jpg", length: 7},
    { upper: "<span class='highlight'>みかの</span>はら わきてながるる いづみがは", lower: "いつみきとてかこひしかるらむ",img:"みかの.jpg", length: 5 },
    { upper: "<span class='highlight'>やまざ</span>とは ふゆぞさびしさ まさりける", lower: "ひとめもくさもかれぬとおもへば" ,img:"やまざ.jpg", length: 4,},
    { upper: "<span class='highlight'>こころあ</span>てに をらばやをらむ はつしもの", lower: "おきまどはせるしらぎくのはな" ,img:"こころあ.jpg", length: 6},
    { upper: "<span class='highlight'>ありあ</span>けの つれなくみえし わかれより", lower: "あかつきばかりうきものはなし",img:"ありあ.jpg", length: 16 },
    { upper: "<span class='highlight'>あさぼらけ あ</span>りあけのつきと みるまでに", lower: "よしののさとにふれるしらゆき",img:"あさあ.jpg", length: 16 },
    { upper: "<span class='highlight'>やまが</span>はに かぜのかけたる しがらみは", lower: "ながれもあへぬもみぢなりけり" ,img:"やまが.jpg", length: 4},
    { upper: "<span class='highlight'>ひさ</span>かたの ひかりのどけき はるのひに", lower: "しづごころなくはなのちるらむ" , img:"ひさ.jpg",length: 3},
    { upper: "<span class='highlight'>たれ</span>をかも しるひとにせむ たかさごの", lower: "まつもむかしのともならなくに" ,img:"たれ.jpg", length: 6},
    { upper: "<span class='highlight'>ひとは</span>いさ こころもしらず ふるさとは", lower: "はなぞむかしのかににほひける",img:"ひとは.jpg", length: 3 },
    { upper: "<span class='highlight'>なつ</span>のよは まだよひながら あけぬるを", lower: "くものいづこにつきやどるらむ" ,img:"なつ.jpg", length: 8},
    { upper: "<span class='highlight'>しら</span>つゆに かぜのふきしく あきののは", lower: "つらぬきとめぬたまぞちりける",img:"しら.jpg", length: 2 },
    { upper: "<span class='highlight'>わすら</span>るる みをばおもはず ちかひてし ", lower: "ひとのいのちのをしくもあるかな" ,img:"わすら.jpg", length: 7},
    { upper: "<span class='highlight'>あさぢ</span>ふの をののしのはら しのぶれど", lower: "あまりてなどかひとのこひしき" ,img:"あさぢ.jpg", length: 16},
    { upper: "<span class='highlight'>しの</span>ぶれど いろにいでにけり わがこひは", lower: "ものやおもふとひとのとふまで" ,img:"しの.jpg", length: 2},
    { upper: "<span class='highlight'>こひ</span>すてふ わがなはまだき たちにけり", lower: "ひとしれずこそおもひそめしか" ,img:"こひ.jpg", length: 6},
    { upper: "<span class='highlight'>ちぎりき</span>な かたみにそでを しぼりつつ", lower: "すゑのまつやまなみこさじとは" , img:"ちきりき.jpg",length: 3},
    { upper: "<span class='highlight'>あひ</span>みての のちのこころに くらぶれば", lower: "むかしはものおもはざりけり" , img:"あい.jpg",length: 16},
    { upper: "<span class='highlight'>あふこ</span>との たえてしなくば なかなかに", lower: "ひとをもみをもうらみざらまし" ,img:"おおこ.jpg", length: 7},
    { upper: "<span class='highlight'>あはれ</span>とも いふべきひとは おもほえで", lower: "みのいたづらになりぬべきかな" ,img:"あわれ.jpg", length: 16},
    { upper: "<span class='highlight'>ゆら</span>のとを わたるふなびと かぢをたえ", lower: "ゆくへもしらぬこひのみちかな" ,img:"ゆら.jpg", length: 2},
    { upper: "<span class='highlight'>やへ</span>むぐら しげれるやどの さびしさに", lower: "ひとこそみえねあきはきにけり",img:"やへ.jpg", length: 4 },
    { upper: "<span class='highlight'>かぜを</span>いたみ いはうつなみの おのれのみ", lower: "くだけてものをおもふころかな",img:"かぜを.jpg", length: 4 },
    { upper: "<span class='highlight'>みかき</span>もり ゑじのたくひの よるはもえ", lower: "ひるはきえつつものをこそおもへ" ,img:"みかき.jpg", length: 5},
    { upper: "<span class='highlight'>きみがため を</span>しからざりし いのちさへ", lower: "ながくもがなとおもひけるかな" ,img:"きみを.jpg", length: 3},
    { upper: "<span class='highlight'>かく</span>とだに えやはいぶきの さしもぐさ", lower: "さしもしらじなもゆるおもひを" , img:"かく.jpg",length: 4},
    { upper: "<span class='highlight'>あけ</span>ぬれば くるるものとは しりながら", lower: "なほうらめしきあさぼらけかな",img:"あけ.jpg", length: 16},
    { upper: "<span class='highlight'>なげき</span>つつ ひとりぬるよの あくるまは", lower: "いかにひさしきものとかはしる" ,img:"なげき.jpg", length: 8},
    { upper: "<span class='highlight'>わすれ</span>じの ゆくすゑまでは かたければ", lower: "けふをかぎりのいのちともがな" ,img:"わすれ.jpg", length: 7},
    { upper: "<span class='highlight'>たき</span>のおとは たえてひさしく なりぬれど", lower: "なこそながれてなほきこえけれ" ,img:"たき.jpg", length: 6},
    { upper: "<span class='highlight'>あらざ</span>らむ このよのほかの おもひでに", lower: "いまひとたびのあふこともがな" ,img:"あらざ.jpg", length: 16},
    { upper: "<span class='highlight'>め</span>ぐりあひて みしやそれとも わかぬまに", lower: "くもがくれにしよはのつきかな" ,img:"め.jpg", length: 1},
    { upper: "<span class='highlight'>ありま</span>やま ゐなのささはら かぜふけば", lower: "いでそよひとをわすれやはする" ,img:"ありま.jpg", length: 16},
    { upper: "<span class='highlight'>やす</span>らはで ねなましものを さよふけて", lower: "かたぶくまでのつきをみしかな" ,img:"やす.jpg", length: 4},
    { upper: "<span class='highlight'>おほえ</span>やま いくののみちの とほければ", lower: "まだふみもみずあまのはしだて" ,img:"おおえ.jpg", length: 7},
    { upper: "<span class='highlight'>いに</span>しへの ならのみやこの やへざくら", lower: "けふここのへににほひぬるかな" ,img:"いに.jpg", length: 3},
    { upper: "<span class='highlight'>よを</span>こめて とりのそらねは はかるとも", lower: "よにあふさかのせきはゆるさじ" ,img:"よを.jpg", length: 4},
    { upper: "<span class='highlight'>いまは</span>ただ おもひたえなむ とばかりを", lower: "ひとづてならでいふよしもがな" ,img:"いまは.jpg", length: 3},
    { upper: "<span class='highlight'>あさぼらけ う</span>ぢのかはぎり たえだえに", lower: "あらはれわたるせぜのあじろぎ" ,img:"あさう.jpg", length: 16},
    { upper: "<span class='highlight'>うら</span>みわび ほさぬそでだに あるものを", lower: "こひにくちなむなこそをしけれ" ,img:"うら.jpg", length: 2},
    { upper: "<span class='highlight'>もろ</span>ともに あはれとおもへ やまざくら", lower: "はなよりほかにしるひともなし" ,img:"もろ.jpg", length: 2},
    { upper: "<span class='highlight'>はるの</span>よの ゆめばかりなる たまくらに", lower: "かひなくたたむなこそをしけれ" ,img:"はるの.jpg", length: 4},
    { upper: "<span class='highlight'>こころに</span>も あらでうきよに ながらへば", lower: "こひしかるべきよはのつきかな" ,img:"こころに.jpg", length: 6},
    { upper: "<span class='highlight'>あらし</span>ふく みむろのやまの もみぢばは", lower: "たつたのかはのにしきなりけり" ,img:"あらし.jpg", length: 16},
    { upper: "<span class='highlight'>さ</span>びしさに やどをたちいでて ながむれば", lower: "いづこもおなじあきのゆふぐれ" ,img:"さ.jpg", length: 1},
    { upper: "<span class='highlight'>ゆふ</span>されば かどたのいなば おとづれて", lower: "あしのまろやにあきかぜぞふく" ,img:"ゆふ.jpg", length: 2},
    { upper: "<span class='highlight'>おと</span>にきく たかしのはまの あだなみは", lower: "かけじやそでのぬれもこそすれ" ,img:"おと.jpg",length: 7},
    { upper: "<span class='highlight'>たか</span>さごの をのへのさくら さきにけり", lower: "とやまのかすみたたずもあらなむ",img:"たか.jpg", length: 6 },
    { upper: "<span class='highlight'>うか</span>りける ひとをはつせの やまおろしよ", lower: "はげしかれとはいのらぬものを" ,img:"うか.jpg", length: 2},
    { upper: "<span class='highlight'>ちぎりお</span>きし させもがつゆを いのちにて", lower: "あはれことしのあきもいぬめり" ,img:"ちきりお.jpg", length: 3},
    { upper: "<span class='highlight'>わたのはら こ</span>ぎいでてみれば ひさかたの", lower: "くもゐにまがふおきつしらなみ" ,img:"わたこ.jpg", length: 7},
    { upper: "<span class='highlight'>せ</span>をはやみ いはにせかるる たきがはの", lower: "われてもすゑにあはむとぞおもふ" ,img:"せ.jpg", length: 1},
    { upper: "<span class='highlight'>あはぢ</span>しま かよふちどりの なくこゑに", lower: "いくよねざめぬすまのせきもり" ,img:"あわぢ.jpg", length: 16},
    { upper: "<span class='highlight'>あきか</span>ぜに たなびくくもの たえまより", lower: "もれいづるつきのかげのさやけさ",img:"あきか.jpg", length: 16 },
    { upper: "<span class='highlight'>ながか</span>らむ こころもしらず くろかみの", lower: "みだれてけさはものをこそおもへ" ,img:"ながか.jpg", length: 8},
    { upper: "<span class='highlight'>ほ</span>ととぎす なきつるかたを ながむれば", lower: "ただありあけのつきぞのこれる" ,img:"ほ.jpg", length: 1},
    { upper: "<span class='highlight'>おも</span>ひわび さてもいのちは あるものを", lower: "うきにたへぬはなみだなりけり" ,img:"おも.jpg", length: 7},
    { upper: "<span class='highlight'>よのなかよ</span> みちこそなけれ おもひいる", lower: "やまのおくにもしかぞなくなる" ,img:"よのよ.jpg", length: 4},
    { upper: "<span class='highlight'>ながら</span>へば またこのごろや しのばれむ", lower: "うしとみしよぞいまはこひしき" ,img:"ながら.jpg", length: 8},
    { upper: "<span class='highlight'>よも</span>すがら ものおもふころは あけやらで", lower: "ねやのひまさへつれなかりけり" ,img:"よも.jpg", length: 4},
    { upper: "<span class='highlight'>なげけ</span>とて つきやはものを おもはする", lower: "かこちがほなるわがなみだかな",img:"なげけ.jpg" , length: 8},
    { upper: "<span class='highlight'>む</span>らさめの つゆもまだひぬ まきのはに", lower: "きりたちのぼるあきのゆふぐれ" ,img:"む.png", length: 1},
    { upper: "<span class='highlight'>なにはえ</span>の あしのかりねの ひとよゆゑ", lower: "みをつくしてやこひわたるべき" ,img:"なにはえ.jpg", length: 8},
    { upper: "<span class='highlight'>たま</span>のをよ たえなばたえね ながらへば", lower: "しのぶることのよわりもぞする" ,img:"たま.jpg", length: 6},
    { upper: "<span class='highlight'>みせ</span>ばやな をじまのあまの そでだにも", lower: "ぬれにぞぬれしいろはかはらず" ,img:"みせ.jpg", length: 5},
    { upper: "<span class='highlight'>きり</span>ぎりす なくやしもよの さむしろに", lower: "ころもかたしきひとりかもねむ" ,img:"きり.jpg", length: 3},
    { upper: "<span class='highlight'>わがそ</span>では しほひにみえぬ おきのいしの", lower: "ひとこそしらねかわくまもなし" ,img:"わがそ.jpg", length: 7},
    { upper: "<span class='highlight'>よのなかは</span> つねにもがもな なぎさこぐ", lower: "あまのをぶねのつなでかなしも" ,img:"よのは.jpg", length: 4},
    { upper: "<span class='highlight'>みよ</span>しのの やまのあきかぜ さよふけて", lower: "ふるさとさむくころもうつなり",img:"みよ.jpg" , length: 5},
    { upper: "<span class='highlight'>おほけ</span>なく うきよのたみに おほふかな", lower: "わがたつそまにすみぞめのそで" ,img:"おおけ.jpg", length: 7},
    { upper: "<span class='highlight'>はなさ</span>そふ あらしのにはの ゆきならで", lower: "ふりゆくものはわがみなりけり" ,img:"はなざ.jpg", length: 4},
    { upper: "<span class='highlight'>こぬ</span>ひとを まつほのうらの ゆふなぎに", lower: "やくやもしほのみもこがれつつ" ,img:"こぬ.jpg", length: 6},
    { upper: "<span class='highlight'>かぜそ</span>よぐ ならのをがはの ゆふぐれは", lower: "みそぎぞなつのしるしなりける" ,img:"かぜそ.jpg", length: 4},
    { upper: "<span class='highlight'>ひとも</span>をし ひともうらめし あぢきなく", lower: "よをおもふゆゑにものおもふみは",img:"ひとも.jpg", length: 3 },
    { upper: "<span class='highlight'>もも</span>しきや ふるきのきばの しのぶにも", lower: "なほあまりあるむかしなりけり" ,img:"もも.jpg", length: 2}
]

const startBtn = document.getElementById('start-btn');
const upperStanza = document.getElementById('upper-stanza');
const cardContainer = document.getElementById('card-container');
const statusMessage = document.getElementById('status-message');
const checkboxes = document.querySelectorAll('.kimari-checkbox');
const selectAllBtn = document.getElementById('select-all-btn');
const clearAllBtn = document.getElementById('clear-all-btn');
const applyBtn = document.getElementById('apply-btn');

let currentCorrectLower = '';

function startNewRound() {
    const checkedValues = Array.from(checkboxes)
                               .filter(cb => cb.checked)
                               .map(cb => parseInt(cb.value));
    
    if (checkedValues.length === 0) {
        statusMessage.textContent = '⚠️ 請至少勾選一種枚札類別！';
        cardContainer.innerHTML = '';
        upperStanza.innerHTML = '請勾選上方類別';
        startBtn.disabled = false;
        return;
    }

    let availableKaruta = karutaData.filter(k => checkedValues.includes(k.length));

    if (availableKaruta.length === 0) {
        statusMessage.textContent = '⚠️ 所選類別中目前尚無卡牌資料！';
        cardContainer.innerHTML = '';
        upperStanza.innerHTML = '請切換其他類別組合';
        startBtn.disabled = false;
        return;
    }

    const correctKaruta = availableKaruta[Math.floor(Math.random() * availableKaruta.length)];
    currentCorrectLower = correctKaruta.lower;

    // 隨機選出 3 張干擾牌（包含其圖片資料）
    const otherKaruta = karutaData.filter(k => k.lower !== currentCorrectLower)
                                  .sort(() => 0.5 - Math.random());
    const distractors = otherKaruta.slice(0, 3);

    // 將正確答案與干擾牌打亂
    let displayCards = [correctKaruta, ...distractors].sort(() => 0.5 - Math.random());

    upperStanza.innerHTML = correctKaruta.upper;
    statusMessage.textContent = '哪一張是下句？';
    
    renderCards(displayCards);
}

function renderCards(cardsData) {
    cardContainer.innerHTML = '';
    
    cardsData.forEach(item => {
        const imgCard = document.createElement('img');
        imgCard.classList.add('karuta-card');
        imgCard.src = item.img;  // 直接指定圖片路徑
        imgCard.alt = item.lower;
        
        imgCard.addEventListener('click', () => handleCardClick(imgCard, item.lower));
        cardContainer.appendChild(imgCard);
    });
}

function handleCardClick(clickedCard, clickedText) {
    if (startBtn.disabled) return; 
    startBtn.disabled = true;

    if (clickedText === currentCorrectLower) {
        clickedCard.classList.add('correct');
        statusMessage.textContent = '✅ 正確！你成功搶下歌牌！';
    } else {
        clickedCard.classList.add('incorrect');
        statusMessage.textContent = '❌ 錯誤！那張牌不是正確答案。';
        
        // 找出正確的那一張牌並亮起綠色發光
        Array.from(cardContainer.children).forEach(card => {
            if (card.alt === currentCorrectLower || card.innerHTML === currentCorrectLower) {
                card.classList.add('correct');
            } else if (card !== clickedCard) {
                card.style.opacity = '0.4'; // 其他沒選的牌也稍微暗掉
            }
        });
    }

    setTimeout(() => {
        startBtn.disabled = false;
        startNewRound();
    }, 1500); // 稍微延長顯示時間至 1.4 秒，方便看清正確答案
}

// 綁定全選 / 取消全選按鈕
selectAllBtn.addEventListener('click', () => {
    checkboxes.forEach(cb => cb.checked = true);
});

clearAllBtn.addEventListener('click', () => {
    checkboxes.forEach(cb => cb.checked = false);
});

// 綁定抽題按鈕
applyBtn.addEventListener('click', startNewRound);
startBtn.addEventListener('click', startNewRound);

// 初始化第一局
startNewRound();