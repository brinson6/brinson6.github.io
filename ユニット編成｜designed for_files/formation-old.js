"use strict";var Me=function(){function e(){this.shown_progress=!1,this.progress_timer=0,this.club_member_count=0,this.form_lightness=4,this.songs_data=null,this.members_data=null,this.worker=null,this.working=!1,this.current_formatted_info=null,this.dressup_high_score_info=null,this.dressup_high_score_skillset=null,this.club_data=null,this.marked_data={},this.locked_data={},this.club_members_data=null,this.formatted_type="",this.deleting_seq=[],this.favorite_seq=-1,this.removed_guest_skills=[],this.exercised_members={},this.form_mode="μ's",this.form_difficulty="expert",this.form_attribute="smile",this.form_auto_recalc=!0,this.form_research_guest=!0,this.default_max_index=18,this.showmore_max_index=this.default_max_index,this.form_nonet_mode=!1,this.form_offcolor_sis=!0}return e.prototype.ready=function(){var t=this,o=this;$.event.special.tap.emitTapOnTaphold=!1,$.ajaxSetup({cache:!1}),FastClick.attach(document.body),o.isPremium()||($(".premium-only").hide(),$("#dat-nonet-mode,#dat-offcolor-sis").children().remove(),$("#dat-nonet-mode,#dat-offcolor-sis").append($("<li>").text("premium only.")));var e=$.getJSON("songs.json",function(e){o.songs_data=e,o.prepareSongList()});$.getJSON("members.json",function(e){0==Object.keys(e).length&&(location.href="/nikuma-n/"),o.members_data=e,$(".main-tab-area").css("visibility","visible"),$(document).on("click",".main-tab-area .tab",function(e){return o.onMainTab_Click(e),!1}),o.newcomersView=new FormationNewcomers(e)}),SfUtil.prepareAccountList("#dat-account"),null==$("#dat-account").val()&&$(".warning").show(),e.done(function(){$.cookie("mode")&&o.setFormMode($.cookie("mode")),$.cookie("arrange")&&$("#dat-arrange").val($.cookie("arrange")),$.cookie("difficulty")&&o.setFormDifficulty($.cookie("difficulty")),$.cookie("attribute")&&o.setFormAttribute($.cookie("attribute")),$.cookie("perfect")&&$("#dat-perfect").val($.cookie("perfect")),$.cookie("time")&&$("#dat-time").val($.cookie("time")),$.cookie("notes")&&$("#dat-notes").val($.cookie("notes"))}),$(document).on("change","#dat-account",function(e){o.onDatAccount_Change(e)}),$("#dat-mode .formation-radio-button").click(function(){var e=$(this).data("value");o.setFormMode(e)}),$("#dat-arrange").change(function(){$.cookie("arrange",$(this).val(),{expires:30})}),$("#dat-difficulty .formation-radio-button").click(function(){var e=$(this).data("value");o.setFormDifficulty(e)}),$("#dat-attribute .formation-radio-button").click(function(){var e=$(this).data("value");o.setFormAttribute(e)}),$("#dat-song").change(function(){o.onDifficultyOrSong_Change(),$.removeCookie("time"),$.removeCookie("notes"),""==$("#dat-song").val()&&($("#dat-time").val(""),$("#dat-notes").val(""))}),$("#dat-perfect").change(function(){$.cookie("perfect",$(this).val(),{expires:30})}),$("#dat-time").change(function(){""==$("#dat-song").val()&&$.cookie("time",$(this).val(),{expires:30})}),$("#dat-notes").change(function(){""==$("#dat-song").val()&&$.cookie("notes",$(this).val(),{expires:30})}),$(document).on("click","#do-format-match,#do-format-ease,#do-format-fullcombo,#do-format-easerecovery",function(){return o.removed_guest_skills=[],o.doFormat(this),!1}),$(document).on("click","#do-format-score",function(){return o.openGuestSkillDialog(),!1}),$(document).on("click",".scroll-button",function(){var e=$(document).height(),t=$(window).height();if(!(e<t)){var o=$(this).data("target"),r=$(o).offset().top,a=e-t<r?e-t:r;$("html,body").stop().animate({scrollTop:a},300)}}),$(document).on("click",".tab-area .tab",function(){return $(this).parents(".result-status-area").attr("data-selected",$(this).data("view")),!1}),$(document).on("click","#dat-result tr.row td:nth-child(1)",function(e){return o.onNumberCol_Click(e),!1}),$(document).on("click","#dat-result tr.row td:nth-child(2)",function(){return o.onCenterCol_Click($(this)),!1}),$(document).on("click","#dat-result tr.row td:nth-child(3)",function(e){return o.onThumbnailCol_Click(e),!1}),$(document).on("click","#dat-result tr.row",function(){return o.onResultRow_Click($(this)),!1}),$(document).on("taphold",".result-status-area[data-selected='idol-skill'] .tab[data-view='idol-skill']",function(){o.onSchoolIdolSkillTab_TapHold()}),$(document).on("click","#do-stop-dress",function(){return o.doStopDress(),!1}),$(document).on("click","#dat-recommended-center-skill",function(){return o.onRecommendedCenterSkill_Click($(this)),!1}),$(document).on("click","#dat-recommended-center-skill-holders-row .guest-holder-header",function(e){return o.doHideGuestHoderRow(e),!1}),$(document).on("click",".dialog-club-member ul.dialog-entry-extend > li,.dialog-club-member ul.dialog-entry-slot > li,.dialog-club-member ul.dialog-entry-skilllv > li",function(e){return o.onDialogEntry_Click(e),!1}),$(document).on("click",".dialog-club-member .do-reformat",function(e){return o.doDialogOk(e),!1}),$(document).on("click",".dialog-club-member .do-cancel",function(e){return o.doDialogCancel(e),!1}),$("#dat-auto-recalc li.formation-radio-button").click(function(){var e=$(this).data("value");o.setFormAutoRecalc(!!e)}),$("#do-toggle-option").click(function(){$(".format-option").toggle(100)}),$("#do-show-more").click(function(){o.doShowMore()}),$(document).on("click","#do-positioning",function(e){return t.doPositioning(),!1}),$("#dat-research-guest .formation-radio-button").click(function(){var e=$(this).data("value");o.setResearchGuest(!!e)}),$(".do-recalc").click(function(){o.doRecalc()}),$("#dat-nonet-mode .formation-radio-button").click(function(){var e=$(this).data("value");o.setNonetMode(!!e)}),$("#dat-offcolor-sis .formation-radio-button").click(function(){var e=$(this).data("value");o.setOffcolorSis(!!e)}),$(document).on("click",".dialog-guest-skill .do-toggle-check",function(e){return o.onDialogGuestSkill_CenterSkill_Click(e),!1}),$(document).on("click",".dialog-guest-skill [data-type=acs]",function(e){return o.onDialogGuestSkill_AdditionalCenterSkill_Click(e),!1}),$(document).on("click",".dialog-guest-skill .do-ok",function(e){return o.doDialogGuestSkillOk(e),!1}),$(document).on("click",".dialog-guest-skill .do-cancel",function(e){return o.doDialogGuestSkillCancel(e),!1}),$("#dat-lightness .formation-radio-button").click(function(){var e=$(this).data("value");o.setFormLightness(e)})},e.prototype.doDialogOk=function(e){for(var t=this,o=$(e.currentTarget).parents("div.dialog-club-member"),r=o.data("seq"),a=null,i=0;i<t.current_formatted_info.members.length;i++){var s=t.current_formatted_info.members[i];if(s.seq==r){a=s;break}}if(null==a)throw new Error("Invalid stage member");var l=t.members_data[a.name][SfUtil.getDisplayAttribute(a.attribute)][a.rarity][a.crown],n=$(".dialog-entry-extend li.selected",o).data("value"),d=$(".dialog-entry-slot li.selected",o).data("value"),c=$(".dialog-entry-skilllv li.selected",o).data("value");if(t.exercised_members[r]={extend:n,smile:n?l.extend_smile:l.normal_smile,pure:n?l.extend_pure:l.normal_pure,cool:n?l.extend_cool:l.normal_cool,slot:d,skill_lv:c,skill_frequency:l.skill_level_data[c-1].frequency,skill_effect:l.skill_level_data[c-1].effect,skill_duration:l.skill_level_data[c-1].duration,skill_probability:l.skill_level_data[c-1].probability},$.colorbox.close(),SfUtil.sendGaEvent("formation","temporary_modify","ユーザー情報仮更新"),t.form_auto_recalc){delete t.locked_data[r];var u={cmd:"start",favorite_guest:t.form_research_guest?null:t.current_formatted_info.guest_center_skill};t.callWorker(u)}else for(var m=$("#dat-result tr"),f=(i=0,m.length);i<f;i++){var _=$(m[i]);if(_.data("seq")==r){_.addClass("exercised"),_.data("cannot-sislock",!0),delete t.locked_data[r];var h=this.marked_data[r];isNaN(h)&&(h=0);var p=$("td:nth-child(1)",_);t.showResult_refreshNumberCol(p,h)}}},e.prototype.doDialogCancel=function(e){$.colorbox.close()},e.prototype.doFormat=function(e){var t=this,o=$("#dat-account").val(),r=localStorage.getItem(o),a=JSON.parse(r);t.club_data=a,t.club_members_data=a.members,t.club_member_count=a.members.length,t.newcomersView.newcomers_array.forEach(function(e){t.club_members_data.push(e)});for(var i=t.club_members_data.length-1;0<=i;i--)""==SfUtil.nz(t.club_members_data[i][0])&&t.club_members_data.splice(i,1);if(t.club_members_data.length<9)alert(SfUtil.localize("9人以上登録してから実行してください。"));else if(18!=a.members[0].length){t.deleting_seq=[],t.favorite_seq=-1;var s=[];for(var l in t.exercised_members)t.marked_data[l]||s.push(parseInt(l));for(i=0;i<s.length;i++)delete t.exercised_members[s[i]];var n=t.getFormMode(),d=$("#dat-arrange").val(),c=t.getFormDifficulty(),u=t.getFormAttribute(),m=parseInt($("#dat-perfect").val()),f=parseInt($("#dat-time").val()),_=parseInt($("#dat-notes").val()),h=t.getFormLightness();isNaN(m)&&(m=80),isNaN(f)&&(f=t.songs_data.average[n][c][u].times),isNaN(_)&&(_=t.songs_data.average[n][c][u].notes);var p={song_mode:n,song_arrange:d,song_attr:u,song_perfect:m,song_times:f,song_notes:_,with_guest:"do-format-score"==$(e).attr("id"),with_idol_skill:"do-format-match"==$(e).attr("id")||"do-format-score"==$(e).attr("id"),nonet_mode:t.getFormNonetMode(),offcolor_sis:t.getFormOffcolorSis(),song_difficulty:c,song:$("#dat-song").val(),lightness:h};if(p.idol_skill_sets=SfUtil.resetIdolSkillData(a.idol_skills),t.live_info=p,t.formatted_type="","do-format-match"==$(e).attr("id"))SfUtil.sendGaEvent("formation","match","マッチ"),t.formatted_type="score";else if("do-format-score"==$(e).attr("id"))SfUtil.sendGaEvent("formation","score","課題曲"),t.formatted_type="score";else if("do-format-ease"==$(e).attr("id"))SfUtil.sendGaEvent("formation","ease","判定"),t.formatted_type="ease";else if("do-format-fullcombo"==$(e).attr("id"))SfUtil.sendGaEvent("formation","fullcombo","フルコン"),t.formatted_type="fullcombo";else{if("do-format-easerecovery"!=$(e).attr("id"))throw new Error("おかしいみたいです");SfUtil.sendGaEvent("formation","easerecovery","回復付き判定"),t.formatted_type="easerecovery"}if(!t.getFormNonetMode()||t.validateNonetMode(t.club_members_data,t.live_info,t.deleting_seq,-1)){$(".message-area").hide(),t.showmore_max_index=t.default_max_index;t.callWorker({cmd:"start",favorite_guest:null})}else alert(SfUtil.localize("ノネットユニットを編成できません。"))}else alert(SfUtil.localize("「データコンバージョン」をお願いします"))},e.prototype.doStopDress=function(){null!=this.worker&&this.worker.terminate(),this.dressup()},e.prototype.callWorker=function(e){var o=this;if(!o.working||"start"==e.cmd){e.live_info=o.live_info,e.club_members_data=o.club_members_data,e.formatted_type=o.formatted_type,e.members_data=o.members_data,e.deleting_seq=o.deleting_seq,e.favorite_seq=o.favorite_seq,e.removed_guest_skills=o.removed_guest_skills,e.exercised_members=o.exercised_members,e.marked_data=o.marked_data,e.locked_data=o.locked_data,e.premium=o.isPremium(),o.working=!0,o.shown_progress=!1,o.progress_timer=window.setTimeout(function(){$(".result-status-area").hide(),o.shown_progress=!0,$(".progress-area").text("").show()},1e3),null!=o.worker&&o.worker.terminate(),o.worker=new Worker("formation-worker.js?_=20190605205440");var r=Date.now();o.worker.addEventListener("message",function(e){var t=e.data;switch(t.cmd){case"log":console.log(t.log);break;case"start":clearTimeout(o.progress_timer),$(".progress-area").hide(),o.showResult(o.live_info,t.formatted),o.working=!1,o.current_formatted_info=t.formatted,console.log("team build in {"+(Date.now()-r)/1e3+"} seconds.");break;case"progress":if(o.shown_progress){switch(t.stage){case SfUtil.FORMATION_PROGRESS_COMPUTE_ROUGH_SCORE:$(".progress-area").text("スコア試算中…… "+Math.floor(t.count/t.max_count*100)+"%");break;case SfUtil.FORMATION_PROGRESS_COMPUTE_IDOL_SKILL:$(".progress-area").text("SIS計算中…… "+Math.floor(t.count/t.max_count*100)+"%");break;case SfUtil.FORMATION_PROGRESS_COMPUTE_SPECIAL_SKILL:$(".progress-area").text("特殊な特技計算中…… "+Math.floor(t.count/t.max_count*100)+"%");break;case SfUtil.FORMATION_PROGRESS_DRESSUP_FULLY:$(".progress-area").children().remove(),$("<span>").appendTo(".progress-area").text(SfUtil.localize("formation_message_01","スクールアイドルスキル支度中…… ")+Math.floor(t.elapsed_time)+SfUtil.localize("formation_message_02","秒経過")+" "+SfUtil.localize("formation_message_03","スコア期待値の上昇")+(t.updated_score-t.default_score)),$("<div>").appendTo(".progress-area").attr("id","do-stop-dress").text(SfUtil.localize("支度完了"));break;case SfUtil.FORMATION_PROGRESS_DRESSUP_STRICT:$(".progress-area").children().remove(),$("<span>").appendTo(".progress-area").text(SfUtil.localize("formation_message_01","スクールアイドルスキル支度中…… ")+Math.floor(t.elapsed_time)+SfUtil.localize("formation_message_02","秒経過")+" "+SfUtil.localize("formation_message_03","スコア期待値の上昇")+(t.updated_score-t.default_score)),$("<div>").appendTo(".progress-area").attr("id","do-stop-dress").text(SfUtil.localize("支度完了")),$("<p>").appendTo(".progress-area").text("strict search...");break;case SfUtil.FORMATION_PROGRESS_SEARCH_HIGH_SCORE:$(".progress-area").text("ハイスコア探索中…… "+Math.floor(t.count/t.max_count*100)+"%")}e.data.temp=new Date}break;case"cannot":clearTimeout(o.progress_timer),$(".progress-area").hide(),o.working=!1,alert(SfUtil.localize("cannot build team."));break;case"restart":clearTimeout(o.progress_timer),$(".progress-area").hide(),o.showResult(o.live_info,t.formatted),o.working=!1,o.current_formatted_info=t.formatted,console.log("team rebuild in {"+(Date.now()-r)/1e3+"} seconds.");break;case"dress":o.dressup(),console.log("dress up in {"+(Date.now()-r)/1e3+"} seconds.");break;case"dressup":o.dressup_high_score_info=t.high_score_info,o.dressup_high_score_skillset=t.high_score_skillset;break;case"error":alert(SfUtil.localize("error_occurred","エラーが発生しました。メンバー登録画面でロードしたあとに検証ボタンを押してみてください"));break;default:throw new Error(JSON.stringify(t))}}),o.worker.postMessage(e)}},e.prototype.dressup=function(){clearTimeout(this.progress_timer),$(".progress-area").hide();var e=this.current_formatted_info;if(null!=this.dressup_high_score_info&&null!=this.dressup_high_score_skillset){for(var t=0;t<9;t++)e.members[t].idol_skills=this.dressup_high_score_skillset[t];for(t=9;t<e.members.length;t++)e.members[t].idol_skills=[];e.expected_score=this.dressup_high_score_info.expected_score,"score"==this.formatted_type&&(this.dressup_high_score_info.hasOwnProperty("expected_score_left")&&(e.expected_score_left=this.dressup_high_score_info.expected_score_left),this.dressup_high_score_info.hasOwnProperty("expected_score_right")&&(e.expected_score_right=this.dressup_high_score_info.expected_score_right)),e.view_status=this.dressup_high_score_info.view_status,e.view_additional=this.dressup_high_score_info.view_additional}this.showResult(this.live_info,e),this.working=!1,this.current_formatted_info=e,$(".result-status-area").attr("data-selected","idol-skill")},e.prototype.onResultRow_Click=function(e){var t=this;if(!(t.club_members_data.length-t.deleting_seq.length<=9)){var o=e.data("seq");if(!t.getFormNonetMode()||t.validateNonetMode(t.club_members_data,t.live_info,t.deleting_seq,o))if(t.deleting_seq.push(o),delete t.locked_data[o],SfUtil.sendGaEvent("formation","temporary_remove","ユーザー情報仮削除"),t.form_auto_recalc){var r={cmd:"start",favorite_guest:t.form_research_guest?null:t.current_formatted_info.guest_center_skill};t.callWorker(r)}else e.remove();else alert(SfUtil.localize("ノネットユニットを編成できません。"))}},e.prototype.onCenterCol_Click=function(e){var t=this,o=e.parents("tr.row").data("seq");if(t.favorite_seq=o,SfUtil.sendGaEvent("formation","favorite_center","推しセンター"),!t.form_auto_recalc){var r=e.closest("tr"),a=r.closest("tbody"),i=$("tr.center",a);return $("td:nth-child(2)",i).text(""),i.removeClass("center"),r.addClass("center"),void $("td:nth-child(2)",r).text("♪")}var s={cmd:"start",favorite_guest:t.form_research_guest?null:t.current_formatted_info.guest_center_skill};t.callWorker(s)},e.prototype.onDifficultyOrSong_Change=function(){var e=this.getFormDifficulty(),t=this.getFormMode(),o=this.getFormAttribute(),r=$("#dat-song").val();if(""==r)return!1;var a=this.songs_data[t][o][r];$("#dat-time").val(a.time),"master"==e?0==a.master?$("#dat-notes").val(""):$("#dat-notes").val(a.master):"expert"==e?0==a.expert?$("#dat-notes").val(""):$("#dat-notes").val(a.expert):"hard"==e&&(0==a.hard?$("#dat-notes").val(""):$("#dat-notes").val(a.hard))},e.prototype.prepareSongList=function(){var e=this.getFormMode(),t=this.getFormAttribute(),o=this.getFormDifficulty();if(""===e||""===t||""===o)return!1;var r=$("#dat-song").val();$("#dat-song").children().not(":nth-child(1)").remove();var a=[];for(var i in this.songs_data[e][t]){var s=this.songs_data[e][t][i];s.hasOwnProperty(o)&&0!==parseInt(s[o])&&a.push({key:i,text_en:this.songs_data[e][t][i].title_en})}var l=$.cookie("lang");if(null!=l&&"ja"!=l)for(var n in a.sort(function(e,t){return e.text_en<t.text_en?-1:e.text_en>t.text_en?1:0}),a){var d=$("<option>").appendTo("#dat-song").val(a[n].key).text(a[n].text_en);a[n].key===r&&d.prop("selected",!0)}else for(var n in a.sort(function(e,t){return e.key<t.key?-1:e.key>t.key?1:0}),a){d=$("<option>").appendTo("#dat-song").val(a[n].key).text(a[n].key);a[n].key===r&&d.prop("selected",!0)}return!0},e.prototype.onSchoolIdolSkillTab_TapHold=function(){if(null==this.worker)throw new Error("ワーカーがいません");$(".result-status-area").hide(),this.locked_data={},this.dressup_high_score_info=null,this.dressup_high_score_skillset=null,SfUtil.sendGaEvent("formation","dressup","SIS長押し");var e={cmd:"dress",current_formatted_info:this.current_formatted_info};this.callWorker(e)},e.prototype.getIconPath=function(e){var t=this.members_data,o=null;if(t[e.name]){var r=t[e.name];if(r[SfUtil.getDisplayAttribute(e.attribute)]){var a=r[SfUtil.getDisplayAttribute(e.attribute)];if(a[e.rarity]){var i=a[e.rarity];if(i[e.crown]){var s=i[e.crown];e.extend&&s.extend_icon?o="dat/icon-"+s.id+"x.png":!e.extend&&s.normal_icon&&(o="dat/icon-"+s.id+"n.png")}}}}return o},e.prototype.layoutResult=function(){$(".wrapper").hasClass("mobile-view")?($("#dat-result-area").outerWidth($(window).width()-20),$("#dat-unit-result-area").outerWidth($(window).width()-20)):($("#dat-result-area").css("width","auto"),$("#dat-unit-result-area").css("width","auto"))},e.prototype.isPremium=function(){var e=!1,t=localStorage.getItem(SfUtil.STRIPE_KEY);if(null!=t)try{null!=JSON.parse(t).oshimen&&(e=!0)}catch(e){alert("Invalid nikuma-n.\n"+e)}return e},e.prototype.showResult=function(e,t){$(".result-status-area").attr("data-selected","status");var o=this.isPremium(),r=$("#dat-result");$(".row",r).remove();for(var a=0;a<this.showmore_max_index&&a<t.members.length;a++){var i=t.members[a];this.showResult_addMember(t,r,i,a,o)}this.judgeShowMore(t,o),$("#dat-center-skill").text(SfUtil.getDisplayFullCenterSkill(e.song_attr,t.center_skill)),$("#dat-recommended-center-skill").text(SfUtil.getDisplayFullCenterSkill(e.song_attr,t.guest_center_skill)).attr("data-skill",t.guest_center_skill),$("#dat-recommended-center-skill-holders .result-area").empty();var s=SfUtil.CENTER_SKILL_NOTHING+"/"+SfUtil.ADDITIONAL_CENTER_SKILL_NOTHING;t.guest_center_skill!=s?this.findGuestSkillHolder(e,t):$("#dat-recommended-center-skill-holders-row").hide(),t.hasOwnProperty("expected_score_right")?$("#dat-expected-score").text(t.expected_score+" ( 2σ "+t.expected_score_right+" )"):$("#dat-expected-score").text(t.expected_score),$("#dat-unit-status").text(t.view_status+" +"+t.view_additional);var l={R:25,SR:55,SSR:120,UR:200},n=0;for(a=0;a<9;a++){var d=t.members[a],c=d.rarity,u=this.members_data[d.name][SfUtil.getDisplayAttribute(d.attribute)][d.rarity][d.crown];null!=u&&!u.promotion||(c="R"),n+=d.skill_lv*l[c]}var m=1;14250<=n?m=10:10050<=n?m=9:6900<=n?m=8:4650<=n?m=7:3150<=n?m=6:2250<=n?m=5:1350<=n?m=4:900<=n?m=3:450<=n&&(m=2),$("#dat-otasuke-power").text(m),this.judgeShowPositioning(o),$(".result-status-area").show()},e.prototype.showResult_addMember=function(e,t,o,r,a){var i=$("<tr>").appendTo(t).addClass("row").data("seq",o.seq).data("index",r),s=o.seq;s in this.exercised_members&&s<this.club_member_count?i.addClass("exercised"):this.club_member_count<=s&&i.addClass("newcomer");var l=$("<td>").appendTo(i),n=this.marked_data[o.seq];isNaN(n)&&(n=0);o.seq,this.locked_data;this.showResult_refreshNumberCol(l,n),o.seq==e.center_member.seq?($("<td>").appendTo(i).text("♪"),i.addClass("center")):$("<td>").appendTo(i).text("");var d=this.getIconPath(o);if(null!=d){var c=$("<td>").appendTo(i),u=$("<div>").appendTo(c).addClass("frame").addClass(o.attribute).addClass(o.rarity.toLowerCase());if("SR"==o.rarity){var m=$("<div>").appendTo(u).addClass("bg").addClass(o.attribute).addClass(o.rarity.toLowerCase());$("<img>").appendTo(m).attr("src",d)}else $("<img>").appendTo(u).attr("src",d);$("<div>").appendTo(u).addClass("skill-level").text(o.skill_lv)}else $("<td>").appendTo(i);$("<td>").appendTo(i).text(SfUtil.localize(o.name)).addClass("status"),$("<td>").appendTo(i).text(SfUtil.localize(SfUtil.getDisplayAttribute(o.attribute))).addClass("status"),$("<td>").appendTo(i).text(o.rarity).addClass("status"),"(カスタム)"==o.crown&&null!=o.memo?$("<td>").appendTo(i).text(o.memo).addClass("status"):$("<td>").appendTo(i).text(o.crown).addClass("status"),$("<td>").appendTo(i).text(SfUtil.localize("table_"+SfUtil.getDisplayExtend(o.extend),SfUtil.getDisplayExtend(o.extend))).addClass("status"),$("<td>").appendTo(i).text(o.real_score).addClass("status"),$("<td>").appendTo(i).text(o.real_skill_score).addClass("status"),$("<td>").appendTo(i).text(o.expected_ease).addClass("status"),$("<td>").appendTo(i).text(o.expected_recovery).addClass("status");var f={smile:"♪",pure:"♪",cool:"♪"};a&&(f={smile:'<span class="icon-sun"></span>',pure:'<span class="icon-star"></span>',cool:'<span class="icon-moon"></span>'});var _=["kiss","perfume","ring","cross","aura","veil","charm","heal","trick","wink","trill","bloom","member"];a&&_.push("nonet");for(var h=0;h<_.length;h++){var p=$("<td>").appendTo(i).addClass("idol-skill");for(var g in f)if(this.memberHasIdolSkill(o,SfIdolSkill.TYPES[g+_[h]])){p.html(f[g]);break}}},e.prototype.showResult_refreshNumberCol=function(e,t){var o=e.closest("tr").index();switch(e.children().remove(),t){case 0:break;case 1:$("<span>").appendTo(e).addClass("icon-neutral");break;case 2:$("<span>").appendTo(e).addClass("icon-evil");break;default:throw new Error("Invalid mark {"+t+"}")}$("<span>").appendTo(e).text(Math.floor(o))},e.prototype.doShowMore=function(){var e=this,t=$("#dat-result"),o=0,r=$("tr.row",t);0!=r.length&&(o=Math.floor(r.last().data("index"))+1),e.showmore_max_index=o+9;for(var a=o;a<e.showmore_max_index&&a<e.current_formatted_info.members.length;a++){var i=e.current_formatted_info.members[a];this.showResult_addMember(e.current_formatted_info,t,i,a,!0)}e.judgeShowMore(e.current_formatted_info,!0)},e.prototype.judgeShowPositioning=function(e){if($("#premium-row").remove(),e){var t=this.songs_data[this.getFormMode()];if(null!=t){var o=t[this.getFormAttribute()];if(null!=o){var r=o[this.live_info.song];if(null!=r&&r.hasOwnProperty(this.getFormDifficulty()+"_weight")&&0<r[this.getFormDifficulty()+"_weight"].length){var a=$("table.result-summary > tbody"),i=$("<tr>").appendTo(a).attr("id","premium-row");$("<td>").appendTo(i).text(SfUtil.localize("premium-row","おまけ :"));var s=$("<td>").appendTo(i);$("<span>").appendTo(s).attr("id","do-positioning").text(SfUtil.localize("位置決め"))}}}}},e.prototype.judgeShowMore=function(e,t){if($(".show-more-area").hide(),t){var o=$("#dat-result"),r=0,a=$("tr.row",o);0!=a.length&&(r=Math.floor(a.last().data("index"))),$(".show-more-area").show(),r<e.members.length-1?$("#do-show-more").show():$("#do-show-more").hide()}},e.prototype.memberHasIdolSkill=function(e,t){for(var o in e.idol_skills){var r=e.idol_skills[o];if(r.name==t.name&&r.skill_attr==t.skill_attr)return!0}return!1},e.prototype.onRecommendedCenterSkill_Click=function(e){var t=e.attr("data-skill");if(t==SfUtil.CENTER_SKILL_NOTHING+"/"+SfUtil.ADDITIONAL_CENTER_SKILL_NOTHING)return!1;if(this.removed_guest_skills.push(t),!this.form_auto_recalc)return $("#dat-recommended-center-skill").text(""),void $("#dat-recommended-center-skill-holders-row").hide(400);$("#dat-research-guest .formation-radio-button").first().trigger("click");this.callWorker({cmd:"start",favorite_guest:null})},e.prototype.onNumberCol_Click=function(e){var t=$(e.currentTarget),o=t.closest("tr.row"),r=o.data("seq"),a=(o.data("index"),this.marked_data[r]);return isNaN(a)&&(a=0),2<++a&&(a=0),this.marked_data[r]=a,this.showResult_refreshNumberCol(t,a),!1},e.prototype.onThumbnailCol_Click=function(e){var t=$(e.currentTarget);if(null==this.worker)throw new Error("ワーカーがいません");var o=t.closest("tr.row"),r=o.data("seq"),a=o.data("index"),i=this.club_data.members[r],s=this.current_formatted_info.members[a];if("(カスタム)"!=s.crown){var l=this.members_data[s.name][SfUtil.getDisplayAttribute(s.attribute)][s.rarity][s.crown];$(".dialog-club-member").attr("data-seq",r),$(".dialog-club-member td.face").html(t.html()),$(".dialog-club-member .crown").text(s.crown),$(".dialog-club-member .skill").text(SfUtil.localize(s.skill));var n=s.center_skill+"/"+s.additional_center_skill;$(".dialog-club-member .center-skill").text(SfUtil.getDisplayFullCenterSkill(s.attribute,n)),$(".dialog-club-member .skill-level").remove();var d=$(".dialog-club-member ul.dialog-entry-extend");if(d.children().remove(),!SfUtil.getExtendKey(SfUtil.getDisplayValue(i[SfUtil.COL_EXTEND]))){var c=$("<li>").appendTo(d).attr("data-value","false").text(SfUtil.localize("未覚醒button","未覚醒"));s.extend||c.addClass("selected")}var u=$("<li>").appendTo(d).attr("data-value","true").text(SfUtil.localize("覚醒button","覚醒"));s.extend&&u.addClass("selected");var m=$(".dialog-club-member ul.dialog-entry-slot");m.children().remove();for(var f=l.min_slot,_=l.max_slot,h=f;h<=_;h++){var p=$("<li>").appendTo(m).attr("data-value",h).text(h);h==s.slot&&p.addClass("selected")}var g=$(".dialog-club-member ul.dialog-entry-skilllv");g.children().remove();for(var v=1;v<=8;v++){p=$("<li>").appendTo(g).attr("data-value",v).text(v);v==s.skill_lv&&p.addClass("selected")}$.colorbox({html:$("#dialog-club-member-src > .dialog-club-member").clone(),transition:"fade",speed:100,fadeOut:50,overlayClose:!0,closeButton:!1,fixed:!1,scrolling:!1,maxWidth:"100%"})}},e.prototype.onDialogEntry_Click=function(e){var t=$(e.currentTarget),o=t.parents("ul");$("li",o).not(t).removeClass("selected"),t.addClass("selected")},e.prototype.findGuestSkillHolder=function(e,t){var o=this.members_data,r=SfUtil.getDisplayAttribute(e.song_attr),a=t.guest_center_skill.split("/"),i=SfUtil.DATAVALUE_CENTER_SKILL[a[0]],s=SfUtil.DATAVALUE_ADDITIONAL_CENTER_SKILL[a[1]],l=$("#dat-recommended-center-skill-holders > .result-area");for(var n in o){var d=o[n],c=r in d?d[r]:{},u="UR"in c?c.UR:{};for(var m in u){var f=u[m];if(i==("center_skill"in f?f.center_skill:null)){var _=!1;if(s==("additional_center_skill"in f?f.additional_center_skill:null)&&(_=!0),_){0==l.children().length&&$("<div>").appendTo(l).addClass("guest-holder-header").text(SfUtil.localize("閉じる"));var h=$("<div>").appendTo(l).addClass("guest-holder-row"),p=f.normal_icon?"dat/icon-"+f.id+"n.png":null,g=f.extend_icon?"dat/icon-"+f.id+"x.png":null,v=$("<div>").appendTo(h).addClass("guest-holder-cell icon");if(g){var k=$("<div>").appendTo(v).addClass("icon-frame").addClass(SfUtil.getAttributeKey(r)).addClass("ur");$("<img>").appendTo(k).attr("src",g).addClass("icon")}if(p){k=$("<div>").appendTo(v).addClass("icon-frame").addClass(SfUtil.getAttributeKey(r)).addClass("ur");$("<img>").appendTo(k).attr("src",p).addClass("icon")}$("<div>").appendTo(h).addClass("guest-holder-cell name").text(SfUtil.localize(n)),$("<div>").appendTo(h).addClass("guest-holder-cell crown").text(m)}}}}0==l.children().length?$("#dat-recommended-center-skill-holders-row").hide():$("#dat-recommended-center-skill-holders-row").show()},e.prototype.doHideGuestHoderRow=function(e){$("#dat-recommended-center-skill-holders-row").hide(400)},e.prototype.getFormMode=function(){return this.form_mode},e.prototype.getFormDifficulty=function(){return this.form_difficulty},e.prototype.getFormAttribute=function(){return this.form_attribute},e.prototype.getFormNonetMode=function(){return this.form_nonet_mode},e.prototype.getFormOffcolorSis=function(){return this.form_offcolor_sis},e.prototype.setFormMode=function(e){if(this.form_mode!=e){this.form_mode=e;var t=$('#dat-mode .formation-radio-button[data-value="'+e+'"]');$("#dat-mode .formation-radio-button").not(t).removeClass("selected"),t.addClass("selected"),$.cookie("mode",this.form_mode,{expires:30}),this.prepareSongList()}},e.prototype.setFormDifficulty=function(e){if(this.form_difficulty!=e){this.form_difficulty=e;var t=$("#dat-difficulty .formation-radio-button[data-value="+e+"]");$("#dat-difficulty .formation-radio-button").not(t).removeClass("selected"),t.addClass("selected"),$.cookie("difficulty",this.form_difficulty,{expires:30}),this.prepareSongList(),this.onDifficultyOrSong_Change()}},e.prototype.setFormAttribute=function(e){if(this.form_attribute!=e){this.form_attribute=e;var t=$("#dat-attribute .formation-radio-button[data-value="+e+"]");$("#dat-attribute .formation-radio-button").not(t).removeClass("selected"),t.addClass("selected"),$.cookie("attribute",this.form_attribute,{expires:30}),this.prepareSongList()}},e.prototype.setFormAutoRecalc=function(e){if(this.form_auto_recalc!=e){this.form_auto_recalc=e;var t=$("#dat-auto-recalc .formation-radio-button[data-value="+e+"]");$("#dat-auto-recalc .formation-radio-button").not(t).removeClass("selected"),t.addClass("selected"),this.form_auto_recalc?$(".do-recalc").hide():$(".do-recalc").show()}},e.prototype.doRecalc=function(){if(null!=this.current_formatted_info){var e={cmd:"start",favorite_guest:this.form_research_guest?null:this.current_formatted_info.guest_center_skill};this.callWorker(e)}},e.prototype.setResearchGuest=function(e){if(this.form_research_guest!=e){this.form_research_guest=e;var t=$("#dat-research-guest .formation-radio-button[data-value="+e+"]");$("#dat-research-guest .formation-radio-button").not(t).removeClass("selected"),t.addClass("selected")}},e.prototype.setNonetMode=function(e){if(this.form_nonet_mode!=e){this.form_nonet_mode=e;var t=$("#dat-nonet-mode .formation-radio-button[data-value="+e+"]");$("#dat-nonet-mode .formation-radio-button").not(t).removeClass("selected"),t.addClass("selected")}},e.prototype.setOffcolorSis=function(e){if(this.form_offcolor_sis!==e){this.form_offcolor_sis=e;var t=$("#dat-offcolor-sis .formation-radio-button[data-value="+e+"]");$("#dat-offcolor-sis .formation-radio-button").not(t).removeClass("selected"),t.addClass("selected")}},e.prototype.validateNonetMode=function(e,t,o,r){var a;if("μ's"===t.song_mode)a=new Set(["穂乃果","絵里","ことり","海未","凛","真姫","希","花陽","にこ"]);else{if("Aqours"!==t.song_mode)throw new Error("Invalid nonet mode.");a=new Set(["千歌","梨子","果南","ダイヤ","曜","善子","花丸","鞠莉","ルビィ"])}for(var i=0,s=e.length;i<s;i++){var l=e[i];if(null!=l[0]&&(-1===o.indexOf(i)&&i!==r)){var n=SfUtil.getDisplayValue(l[SfUtil.COL_NAME]);if(a.has(n)&&(a.delete(n),0===a.size))return!0}}return!1},e.prototype.loadGcsRemovedCookie=function(e,t){var o=this.getGuestSkillCookieKey(e,t);return $.cookie(o)?JSON.parse($.cookie(o)):null},e.prototype.openGuestSkillDialog=function(){var e=this.getFormMode(),t=this.getFormAttribute(),s=[],o=this.loadGcsRemovedCookie(e,t);null!==o&&(s=o);var r=SfUtil.extractGuestSkills(this.members_data,t),l=$(".guest-skill-area");l.children().remove(),$("<div>").appendTo(l).text(e+" / "+SfUtil.localize(SfUtil.getDisplayAttribute(t)));var n,d=0;r.forEach(function(e){if(e.center_skill!==d){d=e.center_skill;var t=$("<ul>").appendTo(l),o=$("<li>").appendTo(t).attr({"data-type":"cs","data-cs":e.center_skill_key});$("<span>").appendTo(o).addClass("do-toggle-check").text(""+e.center_skill_display);var r=$("<li>").appendTo(t);n=$("<ul>").appendTo(r)}var a=$("<li>").appendTo(n).attr({"data-type":"acs","data-cs":e.center_skill_key,"data-acs":e.additional_center_skill_key,"data-cs-id":e.center_skill,"data-acs-id":e.additional_center_skill}),i=e.center_skill+"/"+e.additional_center_skill;-1===s.indexOf(i)&&a.addClass("selected"),$("<div>").appendTo(a).text(e.additional_center_skill_display)}),$.colorbox({html:$("#dialog-guest-skill-src > .dialog-guest-skill").clone(),transition:"fade",speed:100,fadeOut:50,overlayClose:!0,closeButton:!1,fixed:!1,scrolling:!1,maxWidth:"100%"})},e.prototype.onDialogGuestSkill_CenterSkill_Click=function(e){var t=$(e.currentTarget).closest("li"),o=t.closest(".guest-skill-area"),r=t.data("cs"),a=$(".selected[data-type=acs][data-cs="+r+"]",o),i=$("[data-type=acs][data-cs="+r+"]",o);a.length===i.length?a.removeClass("selected"):i.addClass("selected")},e.prototype.onDialogGuestSkill_AdditionalCenterSkill_Click=function(e){$(e.currentTarget).toggleClass("selected")},e.prototype.doDialogGuestSkillOk=function(e){var t=this,o=$(e.currentTarget).closest(".dialog-guest-skill"),r=$(".guest-skill-area",o);this.removed_guest_skills=[];var a=[];$("[data-type=acs]",r).each(function(){if(!$(this).hasClass("selected")){var e=$(this).attr("data-cs")+"/"+$(this).attr("data-acs");t.removed_guest_skills.push(e),a.push($(this).attr("data-cs-id")+"/"+$(this).attr("data-acs-id"))}});var i=this.getFormMode(),s=this.getFormAttribute(),l=this.getGuestSkillCookieKey(i,s);$.cookie(l,JSON.stringify(a),{expires:60}),$.colorbox.close(),this.doFormat($("#do-format-score"))},e.prototype.doDialogGuestSkillCancel=function(e){$.colorbox.close()},e.prototype.getGuestSkillCookieKey=function(e,t){var o;switch(e){case SfUtil.SONG_MODE_MUSE:o="muse";break;case SfUtil.SONG_MODE_AQOURS:o="aqours";break;default:throw new Error("Invalid song_mode {"+e+"}")}return"gcs-removed-"+o+"_"+t},e.prototype.onMainTab_Click=function(e){var t=$(e.currentTarget);return t.closest(".main-content-area").attr("data-selected",t.data("view")),!1},e.prototype.onDatAccount_Change=function(e){this.marked_data={},this.locked_data={}},e.prototype.doPositioning=function(){var t=this,e=this.songs_data[this.live_info.song_mode];if(null==e)throw new Error("Invalid mode.{"+this.live_info.song_mode);var o=e[this.live_info.song_attr];if(null==o)throw new Error("Invalid attribute.{"+this.live_info.song_attr);var r=o[this.live_info.song];if(null==r)throw new Error("Invalid song.{"+this.live_info.song);var a=r[this.live_info.song_difficulty+"_weight"];if(null==a)throw new Error("Invalid song data.");console.log("weights: "+JSON.stringify(a));var i=[];a.forEach(function(e,t){i.push({index:t,weight:e,member_data:null})}),i.sort(function(e,t){return e.weight>t.weight?-1:e.weight<t.weight?1:e.index<t.index?-1:e.index>t.index?1:0});for(var s=this.live_info.song_mode,l=this.live_info.song_attr,n=this.current_formatted_info.center_skill,d=0,c=[],u=0;u<9;u++){var m=this.current_formatted_info.members[u],f=100;s===SfUtil.SONG_MODE_MUSE?-1!==m.types.indexOf(SfUtil.ADDITIONAL_CENTER_SKILL_MUSE)&&(f+=10):s===SfUtil.SONG_MODE_AQOURS&&-1!==m.types.indexOf(SfUtil.ADDITIONAL_CENTER_SKILL_AQOURS)&&(f+=10),l===m.attribute&&(f+=15);var _=!1;-1!==this.favorite_seq?m.seq===this.favorite_seq&&(_=!0,d++):m.attribute===l&&m.full_center_skill===n&&(_=!0,d++),c.push({tap_weight:f,seq:m.seq,member_data:m,enable_center:_})}c.sort(function(e,t){return e.tap_weight>t.tap_weight?-1:e.tap_weight<t.tap_weight?1:e.seq<t.seq?-1:e.seq>t.seq?1:0});var h=0,p=0,g=null;if(c.forEach(function(e){var t=i[h];0<d&&4==t.index&&(t=i[++h]),e.enable_center&&d<=++p?g=e.member_data:(t.member_data=e.member_data,h++)}),null!=g)for(u=0;u<i.length;u++)if(4===i[u].index){i[u].member_data=g,this.current_formatted_info.center_member=g;break}i.sort(function(e,t){return e.index>t.index?-1:e.index<t.index?1:0}),this.current_formatted_info.members.splice(0,9),i.forEach(function(e){t.current_formatted_info.members.unshift(e.member_data)}),this.showResult(this.live_info,this.current_formatted_info)},e.prototype.setFormLightness=function(e){var t=parseInt(e);if(this.form_lightness!==t){this.form_lightness=t;var o=$("#dat-lightness .formation-radio-button[data-value="+t+"]");$("#dat-lightness .formation-radio-button").not(o).removeClass("selected"),o.addClass("selected"),$.cookie("lightness",this.form_lightness,{expires:30})}},e.prototype.getFormLightness=function(){return this.form_lightness},e}();$(function(){var e=new Me;e.ready(),$(window).resize(function(){e.layoutResult()})});