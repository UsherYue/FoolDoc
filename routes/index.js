/**
 * K12_ServiceAPI
 *  Created by usher.yue.
 * User: usher.yue
 * Date: 17/1/9
 * Time: 19:40
 */

var router =global.newRouter();

router.get('/abc', function (req, res, next) {
  
    res.json('hello,aaa!');
});

router.get('/index',function (req,res,next) {
    // console.log(req.__('Hello'));
    // console.log(getLocale())
    // console.log(getLocales());
    // setLocale('zh-TW');
    // console.log(getLocale());
    // console.log(__('Hello'));
    // setLocale('zh-CN')
    // console.log(L('Hello'));
    res.render('index',{

    });
});


module.exports = router;
