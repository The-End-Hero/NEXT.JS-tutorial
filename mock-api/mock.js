/**
 * Created by xiping.wang on 2017/7/12.
 */
var express=require('express');
var app =express();

var cors = require('cors');
app.use(cors());
// post 参数
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
app.use(bodyParser.json());
app.use(cookieParser());
var urlencodedParser = bodyParser.urlencoded({ extended: false })


//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.post('/login', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    //验证code....
    // res.send('welcome, ' + req.body.username)
    console.log(req.cookies)
    console.log(res.cookies)
    res.json({code:200,msg:'welcome Nick Yang !!!'})
})
var questions={
    "code": "200",
    "message": null,
    "dataMap": [
        {
            "recommendation": {
                "recomId": 0,
                "sortId": 7740,
                "type": 5,
                "subType1": 1,
                "subType2": 2,
                "title": "60㎡就够娶妻生儿了",
                "style": "2",
                "cover": "",
                "createTime": 1499670209000,
                "agreeCount": 0,
                "viewCount": 0,
                "contentType": 3,
                "articleType": 1,
                "content": "1028"
            },
            "recommendationData": {
                "id": 1028,
                "title": "60㎡就够娶妻生儿了",
                "subTitle": "",
                "categoryTags": "有范的家",
                "coverImgUrl": "http://img1.mklimg.com/g2/M00/13/0B/rBBrCVljCzuAXjvEAASvAfuMyMo075.png",
                "content": null,
                "tags": "空间,风格家,匠心",
                "tableName": "cms_article_custom"
            }
        },
        {
            "recommendation": {
                "recomId": 0,
                "sortId": 7741,
                "type": 5,
                "subType1": 1,
                "subType2": 2,
                "title": "50㎡的多变空间，生活就要不一样",
                "style": "2",
                "cover": "",
                "createTime": 1499670181000,
                "agreeCount": 0,
                "viewCount": 0,
                "contentType": 3,
                "articleType": 1,
                "content": "1027"
            },
            "recommendationData": {
                "id": 1027,
                "title": "50㎡的多变空间，生活就要不一样",
                "subTitle": "",
                "categoryTags": "设计精选",
                "coverImgUrl": "http://img3.mklimg.com/g2/M00/13/18/rBBrClli-56AA4nLAAUrk838LJY289.png",
                "content": null,
                "tags": "空间,设计潮流,创意",
                "tableName": "cms_article_custom"
            }
        },
        {
            "recommendation": {
                "recomId": 0,
                "sortId": 7742,
                "type": 5,
                "subType1": 1,
                "subType2": 2,
                "title": "咖啡店也要性冷淡",
                "style": "2",
                "cover": "",
                "createTime": 1499670156000,
                "agreeCount": 0,
                "viewCount": 0,
                "contentType": 3,
                "articleType": 1,
                "content": "1026"
            },
            "recommendationData": {
                "id": 1026,
                "title": "咖啡店也要性冷淡",
                "subTitle": "",
                "categoryTags": "寓道灵感",
                "coverImgUrl": "http://img3.mklimg.com/g2/M00/13/18/rBBrClli-n6AGRMDAALxlP0Bdac176.jpg",
                "content": null,
                "tags": "灵感,极致好设计,创意",
                "tableName": "cms_article_custom"
            }
        },
        {
            "recommendation": {
                "recomId": 0,
                "sortId": 7743,
                "type": 5,
                "subType1": 1,
                "subType2": 2,
                "title": "简约清亮北欧风 66平里点滴幸福生活",
                "style": "2",
                "cover": "",
                "createTime": 1499670128000,
                "agreeCount": 0,
                "viewCount": 0,
                "contentType": 3,
                "articleType": 1,
                "content": "1025"
            },
            "recommendationData": {
                "id": 1025,
                "title": "简约清亮北欧风 66平里点滴幸福生活",
                "subTitle": "",
                "categoryTags": "设计精选",
                "coverImgUrl": "http://img3.mklimg.com/g1/M00/13/18/rBBrBlli-ISAO7cnAAP1QtMjFLE043.jpg",
                "content": null,
                "tags": "优雅,温馨,自然,空间",
                "tableName": "cms_article_custom"
            }
        },
        {
            "recommendation": {
                "recomId": 0,
                "sortId": 7744,
                "type": 5,
                "subType1": 1,
                "subType2": 2,
                "title": "三位租客，配对三位设计师，完成了三个关于“家”的梦想",
                "style": "2",
                "cover": "",
                "createTime": 1499670096000,
                "agreeCount": 0,
                "viewCount": 0,
                "contentType": 3,
                "articleType": 1,
                "content": "1024"
            },
            "recommendationData": {
                "id": 1024,
                "title": "三位租客，配对三位设计师，完成了三个关于“家”的梦想",
                "subTitle": "",
                "categoryTags": "设计大咖",
                "coverImgUrl": "http://img3.mklimg.com/g2/M00/13/17/rBBrClli9tOABSZkAAcqk9mtkkE483.png",
                "content": null,
                "tags": "灵感,设计精选,创意",
                "tableName": "cms_article_custom"
            }
        },
        {
            "recommendation": {
                "recomId": 0,
                "sortId": 7745,
                "type": 5,
                "subType1": 1,
                "subType2": 2,
                "title": "与日光相拥 90平米二居室改造",
                "style": "2",
                "cover": "",
                "createTime": 1499670052000,
                "agreeCount": 0,
                "viewCount": 0,
                "contentType": 3,
                "articleType": 1,
                "content": "1023"
            },
            "recommendationData": {
                "id": 1023,
                "title": "与日光相拥 90平米二居室改造",
                "subTitle": "",
                "categoryTags": "设计精选",
                "coverImgUrl": "http://img2.mklimg.com/g1/M00/13/18/rBBrBlli926AIf5aAASS339V76Y584.jpg",
                "content": null,
                "tags": "灵感,储物家,极致好设计",
                "tableName": "cms_article_custom"
            }
        },
        {
            "recommendation": {
                "recomId": 0,
                "sortId": 7746,
                "type": 5,
                "subType1": 1,
                "subType2": 2,
                "title": "家居混搭秘笈 自由随意且有序",
                "style": "2",
                "cover": "",
                "createTime": 1499670017000,
                "agreeCount": 0,
                "viewCount": 0,
                "contentType": 3,
                "articleType": 1,
                "content": "1022"
            },
            "recommendationData": {
                "id": 1022,
                "title": "家居混搭秘笈 自由随意且有序",
                "subTitle": "",
                "categoryTags": "寓道灵感",
                "coverImgUrl": "http://img1.mklimg.com/g2/M00/13/17/rBBrClli9nCAcY-MAARjb0sMiRA942.jpg",
                "content": null,
                "tags": "灵感,极致好设计,创意",
                "tableName": "cms_article_custom"
            }
        },
        {
            "recommendation": {
                "recomId": 0,
                "sortId": 7747,
                "type": 5,
                "subType1": 1,
                "subType2": 2,
                "title": "旧公寓也有春天",
                "style": "2",
                "cover": "",
                "createTime": 1499669941000,
                "agreeCount": 0,
                "viewCount": 0,
                "contentType": 3,
                "articleType": 1,
                "content": "1021"
            },
            "recommendationData": {
                "id": 1021,
                "title": "旧公寓也有春天",
                "subTitle": "",
                "categoryTags": "生活方式",
                "coverImgUrl": "http://img1.mklimg.com/g2/M00/13/17/rBBrClli9vqAMZfUAAQSnBGI4FU766.jpg",
                "content": null,
                "tags": "空间,匠心,灵感,优雅",
                "tableName": "cms_article_custom"
            }
        },
        {
            "recommendation": {
                "recomId": 0,
                "sortId": 7748,
                "type": 5,
                "subType1": 1,
                "subType2": 2,
                "title": "一套大房子中的多重不同风格设计混合",
                "style": "2",
                "cover": "",
                "createTime": 1499669916000,
                "agreeCount": 0,
                "viewCount": 0,
                "contentType": 3,
                "articleType": 1,
                "content": "1020"
            },
            "recommendationData": {
                "id": 1020,
                "title": "一套大房子中的多重不同风格设计混合",
                "subTitle": "",
                "categoryTags": "设计精选",
                "coverImgUrl": "http://img2.mklimg.com/g2/M00/13/08/rBBrCVli9ZqAYtEjAAYCJdrVcvs979.jpg",
                "content": null,
                "tags": "风格家,匠心,设计潮流",
                "tableName": "cms_article_custom"
            }
        },
        {
            "recommendation": {
                "recomId": 0,
                "sortId": 7749,
                "type": 5,
                "subType1": 1,
                "subType2": 2,
                "title": "五款不可思议的家具设计",
                "style": "2",
                "cover": "",
                "createTime": 1499669815000,
                "agreeCount": 0,
                "viewCount": 0,
                "contentType": 3,
                "articleType": 1,
                "content": "1018"
            },
            "recommendationData": {
                "id": 1018,
                "title": "化身收纳小达人 楼梯下的空间也精彩",
                "subTitle": "",
                "categoryTags": "设计精选",
                "coverImgUrl": "http://img3.mklimg.com/g2/M00/13/07/rBBrCVli8NeAOrDKAATSRtYt1t4546.jpg",
                "content": null,
                "tags": "创意,灵感,简约,空间",
                "tableName": "cms_article_custom"
            }
        }
    ]
};

//写个接口123
app.get('/123',function(req,res){
    res.status(200),
        res.json(questions)
});


const articledetail = {
        "code": "200",
        "message": null,
        "dataMap": {
            "id": 1136,
            "title": "明媚入室静雅别墅清新时尚并存",
            "subTitle": "",
            "categoryTags": "设计精选",
            "coverImgUrl": "http://img1.mklimg.com/g2/M00/13/4E/rBBrCVllvMeAGeVcAAFp2btayYw331.jpg",
            "content": "<p>花开时节户外满目春色明媚得让人艳羡，家居又怎肯落下风呢？这款别墅中利用了清新的流行色用柔美、清新、活力演绎了一曲时尚的家具春曲，居住其中，犹如徜徉在春意满园中。<br/></p><p><img src=\"http://img1.mklimg.com/g1/M00/13/5A/rBBrBVllu-KARZlTAAUbIworL60248.jpg\" title=\"image001.jpg\"/></p><p>窗外满园绿意藏不住，屋内明媚春意入目来，便是客厅设计的入眼印象。空间中聚集了家居设计时尚流行色之亮黄、驼色和鸽灰（亦称冰川灰色），在大面积的玻璃窗的映衬下，多种色彩运用和碰撞，搭配出令人耳目一新的清新与时尚。</p><p><img src=\"http://img3.mklimg.com/g2/M00/13/5D/rBBrClllu--AAPJ5AATQ0oB_evs555.jpg\" title=\"image002.jpg\"/></p><p>自然光线穿过墙面窗户投射进来，宽敞的客厅更彰显出大宅的“静美”与“净雅”。利用鲜艳的色彩弱化大空间的“空”，客厅视觉感饱满且温馨；反之，借用舒适的自然光衬托室内色彩，使其愈加明艳、强烈，以“少无”衬托出“雅净”，这也是设计师精通光源与色彩设计的体现。</p><p><img src=\"http://img3.mklimg.com/g1/M00/13/5E/rBBrBlllu_2ALu5GAAUPnYQJikI221.jpg\" title=\"image003.jpg\"/></p><p>家居设计中对于柔美与温馨的呈现和把握，有时女设计师较之男设计师会更加容易拿捏。设计师通过色彩使用、软装搭配和光源设计，客厅空间的铺面而来的清新自然气质浓烈而直接，然而在略显粗犷的木作长茶几和驼色沙发的对比之下，又增添了几分阳刚美，故，柔得炫目、刚得适宜。</p><p><img src=\"http://img1.mklimg.com/g2/M00/13/4E/rBBrCVllvAiAIx4oAAaC2qt_4CU162.jpg\" title=\"image004.jpg\"/></p><p>轻工业风的餐厅吊灯与墙面自然风景为主题的装饰画，增添了用餐区的现代时尚感。相较于客厅的明艳，餐厅略显简凝，适于日常生活中家人在餐桌上的沟通交流，同时也便于多种用餐氛围的随心营造与转换。<br/></p><p><img src=\"http://img3.mklimg.com/g2/M00/13/5D/rBBrClllvDmAKIvGAASjFGqJ9wg052.jpg\" style=\"float:none;\" title=\"image005.jpg\"/></p><p><img src=\"http://img1.mklimg.com/g2/M00/13/5D/rBBrClllvDqAMV15AAR7N6dk0JI699.jpg\" style=\"float:none;\" title=\"image006.jpg\"/>开放式厨房因落地窗设计宽敞、明亮，搭配黄色插花和优雅桌椅，烹饪区变身艺术空间。烹饪情绪随空间设计而得到释放或被激发，舌尖上的快乐和惬意，自时尚的厨房设计而来。</p><p><img src=\"http://img1.mklimg.com/g2/M00/13/5D/rBBrClllvFOAAneWAAT0lRk94HQ664.jpg\" title=\"image007.jpg\"/></p><p>墙面及楼梯处运用了大量的几何图形，色彩以鸽灰色和亮驼色为主调，玄关的空间质感十分强烈，彰显出别墅即大宅的大气与高雅。楼梯阶梯内嵌的射灯光源温暖、别致，干净、利落的玄关增添了几分家的温馨感。</p><p><img src=\"http://img3.mklimg.com/g1/M00/13/5E/rBBrBlllvF-AfxQ3AAM_B-TZW9Y820.jpg\" title=\"image008.jpg\"/></p><p>自三楼俯瞰楼梯立面，融入了建筑设计手法的楼梯设计，几何线形带来的视觉享受过目深刻，宛若艺术品。</p><p><img src=\"http://img3.mklimg.com/g2/M00/13/5D/rBBrClllvGuAXEJdAAPmxER5eII373.jpg\" title=\"image009.jpg\"/></p><p>主卧色彩设计以浅色调为主，家纺用品同样与主题色系呼应，卧室静谧、舒适的氛围便轻松营造出来。</p><p><img src=\"http://img2.mklimg.com/g1/M00/13/5E/rBBrBlllvHmAKpsiAAQiLTAEIK4004.jpg\" title=\"image010.jpg\"/></p><p>陈设装饰看似简洁，然而并不单调。素雅的墙纸是卧室中最用心的装饰，使空间视觉轻松、惬意的同时，又显雅静。<br/></p><p><img src=\"http://img2.mklimg.com/g2/M00/13/4E/rBBrCVllvIyAZxRDAATI3YBFHRc367.jpg\" title=\"image011.jpg\"/></p><p>儿童房设计色彩缤纷，却不显繁杂，青草绿、海洋蓝、向日葵黄，均是激发孩子想象力和创造力的亮色系。富有童趣的床上用品、台灯及装饰画，满足了孩子天真心性。</p><p><img src=\"http://img2.mklimg.com/g1/M00/13/5A/rBBrBVllvJ2AfRVKAATrdLeZ9Fs938.jpg\" title=\"image012.jpg\"/></p><p>儿童活动区色彩活泼，布置随意，玩耍嬉戏的区域完全可由孩子随心所欲折腾，活动空间宽敞而富有生机，无拘无束之间，满足了孩子对世界的好奇心及无穷尽的潜在创造欲。</p><p><img src=\"http://img1.mklimg.com/g1/M00/13/5A/rBBrBVllvK6AT58uAAS5C3gVye4499.jpg\" title=\"image013.jpg\"/></p><p>独立的休闲区可用于阅读或家庭办公，百无聊赖时独处消遣时光，平复心绪欲认认真真读几本喜欢的书籍，亦或专心地投入到工作状态，这里可以成为另一个选择。</p><p><br/></p><p>来源：和家网</p>",
            "tags": "色彩,极致好设计",
            "tableName": "cms_article_custom"
        }
    }
app.get('/articledetail/:id',function(req,res){
    res.status(200),
        res.json(articledetail)
});
app.get('/articledetail/*',function(req,res){
    res.status(200),
        res.json(articledetail)
});



const simple = {
    "code":200,
    "message":null,
    "dataMap":{
        "msg":"成功获取",
        "num":44535
    }
}
app.get('/simple',function(req,res){
    res.status(200),
        res.json(simple)
});
app.get('/simple',function(req,res){
    res.status(200),
        res.json(simple)
});
//配置服务端口
var server = app.listen(8888, function () {

    var host = server.address().address;

    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
})