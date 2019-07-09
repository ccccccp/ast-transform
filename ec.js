import module from "./module.def.js";
import userServer from './user.server.js';
import membershipDataCtrl from './membership/membership-data/membership-data.controller.js';
import membershipDataHtml from './membership/membership-data/membership-data.html';
import communityNavDir from './membership/component/community-nav.directive.js';
import custompacketCtrl from './membership/dialog/custompacket.controller.js';
import addmessageCtrl from './membership/dialog/addmessage.controller.js';
import delcommonCtrl from './membership/dialog/delcommon.controller.js';
import updatePodctrl from './membership/update-pod/update-pod.controller.js';
import updatePodHtml from './membership/update-pod/update-pod.html';
import membercouponCtrl from './membership/dialog/membercoupon.controller.js';
import balanceCtrl from './asset/balance/balance.controller.js';
import balanceHtml from "./asset/balance/balance.html";
import addMoneyCtrl from './asset/balance/dialog/add-money.controller.js'
import integralCtrl from './asset/integral/integral.controller.js'
import membershipRightsCtrl from './interests/membership-rights/membership-rights.controller.js';
import membershipRightsHtml from './interests/membership-rights/membership-rights.html';
import goodsDiscountCtrl from './interests/goods-discount/goods-discount.controller.js';
import goodsDiscountHtml from './interests/goods-discount/goods-discount.html';
import goodsDiscountEditCtrl from './interests/goods-discount/dialog/goods-discount-edit.controller.js';
import definedIconCtrl from  './interests/defined-interests/dialog/defined-icon.controller.js';
import addGoodsDiscountCtrl from './interests/goods-discount/add-goods-discount.controller.js';
import addGoodsDiscountHtml from './interests/goods-discount/add-goods-discount.html';
import goodsDiscounManageCtrl from './interests/goods-discount/goods-discount-manage.controller.js';
import goodsDiscounManageHtml from './interests/goods-discount/goods-discount-manage.html';
import editMultiGoodsCtrl from './interests/goods-discount/dialog/edit-multi-goods.controller.js';
import editSingleGoodsCtrl from './interests/goods-discount/dialog/edit-single-goods.controller.js';


import user20 from './interests/goods-discount/dialog/add-goods-discount-rule.controller.js';
import user21 from './interests/goods-discount/dialog/batch-edit-goods.controller.js';
import user22 from './interests/goods-discount/add-goods.controller.js';
import user23 from './interests/consumption-discount/consumption-discount.controller.js';
import user24 from './interests/consumption-discount/dialog/consumption-discount-edit.controller.js';
import user25 from './interests/consumption-discount/dialog/add-consumption-discount.controller.js'
import user26 from './interests/priority-goods/priority-goods.controller.js'
import user27 from './interests/safeguarding-rights/safeguarding-rights.controller.js';
import user28 from './interests/preemption/preemption.controller.js'
import user29 from './interests/defined-interests/defined-interests.controller.js';
import user32 from './interests/customer-service/customer-service.controller.js'
import user57 from './interests/direct-train/direct-train.controller.js'
import user33 from './interests/membership-card/growth-value.controller.js';
import user34 from './interests/membership-card/single-card-edit.controller.js';
import user35 from './interests/membership-card/local-card.controller.js';
import user36 from './interests/membership-card/wechat-card.controller.js';
import user37 from './interests/membership-card/single-card.controller.js';
import user38 from './interests/membership-card/more-card.controller.js';
import user39 from './interests/membership-card/dialog/select-appid.controller.js';
import user40 from './interests/membership-card/dialog/select-rights.controller.js';
import user41 from './interests/membership-card/dialog/share-set.controller.js'


import user42 from './membership/blacklist-manage/blacklist-manage.controller.js';
import user43 from './membership/blacklist-manage/dialog/blacklist-limit.controller.js';
import user53 from './membership/blacklist-manage/dialog/blacklist-limit-action.controller.js'

import user44 from './membership/population-division/crowd-list/crowd-list.controller.js';
import user45 from './membership/population-division/crowd-list/add-crowd.controller.js';
import user46 from './membership/component/crowd-card.directive.js';
import user54 from './membership/component/crowd-nav.directive.js';

import user47 from './membership/population-division/population-classification/population-classification.controller.js';
import user55 from './membership/component/crowd-nav.directive.js';


import user48 from './membership/population-division/marketing-log/marketing-log.controller.js';
import user56 from './membership/component/crowd-nav.directive.js';

import user49 from './goods-discount/single-discount/single-discount.controller.js';
import user50 from './goods-discount/single-discount/manageGoods.controller.js';
import user51 from './goods-discount/single-discount/addGoods.controller.js';
import user52 from './goods-discount/single-discount/importGoods.controller.js'





//html
import userHtml3 from "./asset/integral/integral.html";
import userHtml5 from "./goods-discount/single-discount/addGoods.html";
import userHtml6 from "./goods-discount/single-discount/manageGoods.html";
import userHtml7 from "./goods-discount/single-discount/importGoods.html";
import userHtml8 from "./goods-discount/single-discount/single-discount.html";

import userHtml22 from './interests/goods-discount/add-goods.html';
import userHtml23 from './interests/consumption-discount/consumption-discount.html';
import userHtml26 from './interests/priority-goods/priority-goods.html'
import userHtml27 from './interests/safeguarding-rights/safeguarding-rights.html';
import userHtml28 from './interests/preemption/preemption.html';
import userHtml29 from './interests/defined-interests/defined-interests.html';
import userHtml32 from './interests/customer-service/customer-service.html'
import userHtml57 from './interests/direct-train/direct-train.html'
import userHtml33 from './interests/membership-card/growth-value.html';
import userHtml34 from './interests/membership-card/single-card-edit.html';
import userHtml35 from './interests/membership-card/local-card.html';
import userHtml36 from './interests/membership-card/wechat-card.html';
import userHtml37 from './interests/membership-card/single-card.html';
import userHtml38 from './interests/membership-card/more-card.html';
import userHtml42 from './membership/blacklist-manage/blacklist-manage.html';
import userHtml44 from './membership/population-division/crowd-list/crowd-list.html';
import userHtml45 from './membership/population-division/crowd-list/add-crowd.html';
import userHtml46 from './membership/component/crowd-card.html';
import userHtml54 from './membership/component/crowd-nav.html';
import userHtml47 from './membership/population-division/population-classification/population-classification.html';
import userHtml55 from './membership/component/crowd-nav.html';
import userHtml48 from './membership/population-division/marketing-log/marketing-log.html';
import userHtml56 from './membership/component/crowd-nav.html';
import userHtml49 from './goods-discount/single-discount/single-discount.html';
import userHtml50 from './goods-discount/single-discount/manageGoods.html';
import userHtml51 from './goods-discount/single-discount/addGoods.html';
import userHtml52 from './goods-discount/single-discount/importGoods.html'

import './user.less';
import './membership/update-pod/update-pod.less';
import './membership/component/index.less';
import './membership/membership-data/style.less';
import './membership/blacklist-manage/style.less';
import './membership/population-division/style.less';
import './goods-discount/single-discount/style.less';
import './interests/defined-interests/defined-interests.less'
import './interests/safeguarding-rights/safeguarding-rights.less'
import './interests/goods-discount/style.less';
import './interests/membership-card/style.less';


export default () => {
    userServer(module);

    membershipDataCtrl(module);
    membershipDataHtml.run(module);
    communityNavDir(module);
    custompacketCtrl(module);
    addmessageCtrl(module);
    delcommonCtrl(module);
    updatePodctrl(module);
    updatePodHtml.run(module);
    membercouponCtrl(module);
    balanceCtrl(module);
    balanceHtml.run(module);
    addMoneyCtrl(module);
    integralCtrl(module);
    membershipRightsCtrl(module);
    membershipRightsHtml.run(module);
    goodsDiscountCtrl(module);
    goodsDiscountHtml.run(module);
    goodsDiscountEditCtrl(module);
    definedIconCtrl(module);
    addGoodsDiscountCtrl(module);
    addGoodsDiscountHtml.run(module);
    goodsDiscounManageCtrl(module);
    goodsDiscounManageHtml.run(module);
    editMultiGoodsCtrl(module);
    editSingleGoodsCtrl(module);

    user20(module);
    user21(module);
    user22(module);
    user23(module);
    user24(module);
    user25(module);
    user26(module);
    user27(module);
    user28(module);
    user29(module);
    user32(module);
    user33(module);
    user34(module);
    user35(module);
    user36(module);
    user37(module);
    user38(module);
    user39(module);
    user40(module);
    user41(module);
    user42(module);
    user43(module);
    user44(module);
    user45(module);
    user46(module);
    user47(module);
    user48(module);
    user49(module);
    user50(module);
    user51(module);
    user52(module);
    user53(module);
    user54(module);
    user55(module);
    user56(module);
    user57(module);

    userHtml3.run(module);
    userHtml5.run(module);
    userHtml6.run(module);
    userHtml7.run(module);
    userHtml8.run(module);


    userHtml22.run(module);
    userHtml23.run(module);
    userHtml26.run(module);
    userHtml27.run(module);
    userHtml28.run(module);
    userHtml29.run(module);
    userHtml32.run(module);
    userHtml33.run(module);
    userHtml34.run(module);
    userHtml35.run(module);
    userHtml36.run(module);
    userHtml37.run(module);
    userHtml38.run(module);
    userHtml42.run(module);
    userHtml44.run(module);
    userHtml45.run(module);
    userHtml46.run(module);
    userHtml47.run(module);
    userHtml48.run(module);
    userHtml49.run(module);
    userHtml50.run(module);
    userHtml51.run(module);
    userHtml52.run(module);
    userHtml54.run(module);
    userHtml55.run(module);
    userHtml56.run(module);
    userHtml57.run(module);



    return module;
}