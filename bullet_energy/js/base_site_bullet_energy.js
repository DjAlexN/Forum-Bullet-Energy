function setElementForum() {
    var a = $("input.markerElementForum:checked").length;
    var b = $("input.markerElementForum").attr("data-type");
    if (b == "post") {
        $("#countPostSelect b").text(a);
        if (a > 0) {
            $("#countPostSelect").addClass("markerCountElement")
        } else {
            $("#countPostSelect").removeClass("markerCountElement")
        }
    } else {
        if (a > 0) {
            if ($("#control_feed").css("display") == "none") {
                $("#control_feed").show()
            }
        } else {
            $("#control_feed").hide()
        }
    }
}
/*
function doRedirPage(a, b) {
    var c = {};
    c[lang[0][22][3]] = function() {
        $(this).dialog("close")
    };
    c[lang[0][22][4]] = function() {
        if (!isNumber($("#bepopup-promt-page").val()) || $("#bepopup-promt-page").val() > a) {
            $("#bepopup-promt-page").addClass("ui-state-error")
        } else {
            var c = $("#bepopup-promt-page").val();
            if (forum_cpu) {
                var d = dle_root + forum_path + "/rerouting/" + b + "/" + c
            } else {
                var d = dle_root + "index.php?do=" + forum_path + "&action=rerouting&param=" + b + "&id=" + c
            }
            $.post(d, {
                local: window.location.pathname
            }, function(a) {
                if (a.param == 1) {
                    document.location = a.data
                }
            }, "json")
        }
    };
    $("#bepopup").remove();
    $("body").append("<div id='bepopup' title='" + lang[0][28][4] + "' style='display:none'><p>" + lang[0][28][5] + a + "</p><input type='text' name='bepopup-promt-text' id='bepopup-promt-page' class='ui-widget-content ui-corner-all' style='width:97%; padding: .4em;' value=''/></div>");
    $("#bepopup").dialog({
        autoOpen: true,
        width: 470,
        resizable: false,
        buttons: c
    })
}
*/
function doRedirPage(a, b) {
    var c = {};
    
    c[lang[0][22][3]] = function () {
        $(this).dialog("close")
    };
    
    c[lang[0][22][4]] = function () {
        if ( $.isNumeric($("#bepopup-promt-page").val()) === false || $("#bepopup-promt-page").val().length < 1 ) {
            $("#bepopup-promt-page").addClass("ui-state-error")
            return false;
        } else {
            var c = $("#bepopup-promt-page").val();
            document.location = window.location.pathname.replace(/\/page\-[0-9]+/, '') + "page-" + c
        }
    };
    
    $("#bepopup").remove();
    
    $("body").append("<div id='bepopup' title='" + lang[0][28][4] + "' style='display:none'><p>" + lang[0][28][5] + a + "</p><input type='text' name='bepopup-promt-text' id='bepopup-promt-page' class='ui-widget-content ui-corner-all' style='width:97%; padding: .4em;' value=''/></div>");
    
    $("#bepopup").dialog({
        autoOpen: true,
        width: 470,
        resizable: false,
        buttons: c
    })
}

function PostComplaint(a, b) {
    var c = {};
    c[lang[0][23][2]] = function() {
        $(this).dialog("close")
    };
    c[lang[0][23][1]] = function() {
        if ($("#bepopup-promt-text").val().length < 1) {
            $("#bepopup-promt-text").addClass("ui-state-error")
        } else {
            var a = $("#bepopup-promt-text").val();
            $(this).dialog("close");
            $("#bepopup").remove();
            $.post(b.href, {
                text: a
            }, function(a) {
                if (a) {
                    Alert_popup(a.data, lang[0][23][0])
                }
            }, "json")
        }
    };
    $("#bepopup").remove();
    $("body").append("<div id='bepopup' title='" + lang[0][32][3] + "' style='display:none'><textarea name='bepopup-promt-text' id='bepopup-promt-text' class='ui-widget-content ui-corner-all' style='width:97%;height:100px; padding: .4em;'></textarea></div>");
    $("#bepopup").dialog({
        autoOpen: true,
        width: 500,
        resizable: false,
        show: "fade",
        buttons: c
    })
}

jQuery(function($){
		// ctlr+enter submit message fix
		$(document).off( "keydown" );

		$(document).keydown(function(event){
		    if (event.which == 13 && event.ctrlKey) {
				if (window.getSelection) {
					var selectedText = window.getSelection();
				}
				else if (document.getSelection) {
					var selectedText = document.getSelection();
				}
				else if (document.selection) {
					var selectedText = document.selection.createRange().text;
				}

				if (selectedText == "" ) { return; }

				if (selectedText.toString().length > 255 ) { DLEalert(dle_big_text, dle_info); return;}

				var b = {};
			
				b[dle_act_lang[3]] = function() { 
					$(this).dialog('close');						
				};
			
				b[dle_p_send] = function() { 
					if ( $('#dle-promt-text').val().length < 1) {
						$('#dle-promt-text').addClass('ui-state-error');
					} else {
						var response = $('#dle-promt-text').val();
						var selectedText = $('#orfom').text();
						$(this).dialog('close');

						$('#dlepopup').remove();

						$.post(dle_root + 'engine/ajax/complaint.php', { seltext: selectedText,  text: response, action: "orfo", url: window.location.href },
							function(data){
								if (data == 'ok') {  DLEalert(dle_p_send_ok, dle_info); } else { DLEalert(data, dle_info); }
							});
			
					}				
				};
			
				$('#dlepopup').remove();
								
				$('body').append("<div id='dlepopup' class='dle-promt' title='"+dle_orfo_title+"' style='display:none'><textarea name='dle-promt-text' id='dle-promt-text' class='ui-widget-content ui-corner-all' style='width:97%;height:80px; padding: .4em;'></textarea><div id='orfom' style='display:none'>"+selectedText+"</div></div>");
								
				$('#dlepopup').dialog({
					autoOpen: true,
					width: 600,
					resizable: false,
					dialogClass: "modalfixed dle-popup-complaint",
					buttons: b
				});
			
				$('.modalfixed.ui-dialog').css({position:"fixed"});
				$('#dlepopup').dialog( "option", "position", ['0','0'] );
				
		    };
			
		});
});


function submitKey(a) {
	
    if (a.keyCode == 10 || a.keyCode == 13 && a.ctrlKey) {
		
        doAddMessage()
    }
    
}

function ReadTree(a, b) {
    BEconfirm(lang[0][32][2], lang[0][23][4], function() {
        $.post(b.href, {}, function(a) {
            if (a.param == 1) {
                document.location = location.href.split("#")[0]
            }
        }, "json")
    });
    return false
}

function editorModerBlock(a) {
    $("#" + a).hide();
    $("#editor_" + a).css("display", "block")
}

function MsgEditCancel(a) {
    $("#message-" + a).html(cache[a]);
    $(".colorpicker").remove();
    selField = "text_msg";
    fombj = document.forms["message_add_form"];
    $("#file_upload_editor").uploadify("destroy")
}

function showBlock(a) {
    var b = $(a);
    if (b.css("display") == "none") {
        b.show("blind", {}, 500)
    } else {
        b.hide("blind", {}, 500)
    }
}

function Ajax_close(a) {
    $("#loading-layer").fadeOut("slow")
}

function doVoteAllAnswer(a, b) {
    Ajax_Loading("");
    if (forum_cpu) {
        var c = dle_root + forum_path + "/vote-" + a + "/result/" + b
    } else {
        var c = dle_root + "index.php?do=" + forum_path + "&action=vote&id=" + a + "&param=result&id_answer=" + b
    }
    $.post(c, {}, function(a) {
        if (a) {
            if (a.param == 1) {
                $("#bepopup").remove();
                $("body").append("<div id='bepopup' title='" + a.titl + "' style='display:none'>" + a.data + "</div>");
                var b = {};
                b[lang[0][22][3]] = function() {
                    $(this).dialog("close");
                    $("#bepopup").remove()
                };
                $("#bepopup").dialog({
                    autoOpen: true,
                    show: "fade",
                    resizable: false,
                    width: 500,
                    buttons: b
                })
            }
        }
    }, "json");
    Ajax_close("");
    return false
}

function MsgEditSave() {
    var a = document.getElementById("message_edit_form");
    if (a.text_msg.value == "") {
        Alert_popup("��������� �� ����� ���� ������.", lang[0][23][0]);
        return false
    }
    var b = new Array;
    $("#message_edit_form input[class='marker_file_ajax']").each(function(a, c) {
        b.push($(c).val())
    });
    Ajax_Loading("");
    if (forum_cpu) {
        var c = dle_root + forum_path + "/add/" + a.msg_id.value + "/update"
    } else {
        var c = dle_root + "index.php?do=" + forum_path + "&action=newpost&id=" + a.msg_id.value + "&param=update"
    }
    $.post(c, {
        text_msg: a.text_msg.value,
        topic_id: a.topic_id.value,
        msg_id: a.msg_id.value,
        is_ajax: a.ajax.value,
        id_file: b
    }, function(a) {
        Ajax_close("");
        if (a.param == 0) {
            Alert_popup(a.data, lang[0][23][0])
        } else if (a.param == 1) {
            selField = "text_msg";
            fombj = document.forms["message_add_form"];
            $("#file_upload_editor").uploadify("destroy");
            $("#message-" + a.id).replaceWith(a.data);
            $("#message-" + a.id + " .controlMsgBox").show();
            $("#message-" + a.id + " .configureMessage").show();
            $(".colorpicker").remove();
            setElementForum()
        } else if (a.param == 2) {
            document.location = a.link
        }
    }, "json");
    return false
}

function Alert_popup(a, b) {
    $("#bepopup").remove();
    $("body").append("<div id='bepopup' title='" + b + "' style='display:none'><br />" + a + "</div>");
    $("#bepopup").dialog({
        autoOpen: true,
        width: 470,
        resizable: false,
        buttons: {
            Ok: function() {
                $(this).dialog("close");
                $("#bepopup").remove()
            }
        }
    })
}

function BEconfirm(a, b, c) {
    var d = {};
    d[lang[0][22][1]] = function() {
        $(this).dialog("close");
        $("#bepopup").remove()
    };
    d[lang[0][22][0]] = function() {
        $(this).dialog("close");
        $("#bepopup").remove();
        if (c) c()
    };
    $("#bepopup").remove();
    $("body").append("<div id='bepopup' title='" + b + "' style='display:none'><br />" + a + "</div>");
    $("#bepopup").dialog({
        autoOpen: true,
        width: 470,
        resizable: false,
        buttons: d
    })
}

function doWarning(a, b, c, d) {
    Ajax_Loading("");
    var e = {};
    e[lang[0][23][3]] = function() {
        $(this).dialog("close")
    };
    if (forum_cpu) {
        var f = dle_root + forum_path + "/warning-" + a + "/" + c + "/set";
        var g = dle_root + forum_path + "/warning-" + a + "/" + c + "/get"
    } else {
        var f = dle_root + "index.php?do=" + forum_path + "&action=warning&id=" + a + "&log_warn=" + c + "&param=set";
        var g = dle_root + "index.php?do=" + forum_path + "&action=warning&id=" + a + "&log_warn=" + c + "&param=get"
    }
    if (c == 1) {
        e[lang[0][32][0]] = function() {
            $(this).dialog("close");
            var b = {};
            b[lang[0][23][3]] = function() {
                $(this).dialog("close")
            };
            b[lang[0][23][1]] = function() {
                if ($("#bepopup-promt-text").val().length < 1) {
                    $("#bepopup-promt-text").addClass("ui-state-error")
                } else {
                    if (!isNumber($("#ball_warn").val())) {
                        $("#ball_warn").addClass("ui-state-error");
                        return false
                    }
                    var b = $("#bepopup-promt-text").val();
                    $(this).dialog("close");
                    $("#dlepopup").remove();
                    $.post(f, {
                        id: a,
                        actions: "down",
                        response: b,
                        ball: $("#ball_warn").val(),
                        log_warn: c
                    }, function(a) {
                        if (a.param == 1) {
                            $(d).text(a.ball);
                            Alert_popup(a.data, lang[0][23][0])
                        } else {
                            Alert_popup(a.data, lang[0][23][0])
                        }
                        Ajax_close("")
                    }, "json")
                }
            };
            $.post(g, {}, function(a) {
                if (a.param == 1) {
                    $("#bepopup").remove();
                    $("body").append("<div id='bepopup' title='" + a.lng[5] + a.user + "' style='display:none'>" + a.lng[6] + "<textarea name='bepopup-promt-text' id='bepopup-promt-text' class='ui-widget-content ui-corner-all' style='width:97%;height:100px; padding: .4em;'></textarea><dl class='pupopForumElementDl'><dt>" + a.lng[7] + '</dt><dd style="color:red">' + a.ball_user + "</dd></dl><dl class='pupopForumElementDl'><dt>" + a.lng[8] + "</dt><dd><input id='ball_warn' type='text' name='ball_warn' value='' size='50' maxlength='200' autocomplete='off'></dd></dl></div>" + a.js);
                    $("#bepopup").dialog({
                        autoOpen: true,
                        width: 700,
                        resizable: false,
                        show: "fade",
                        buttons: b
                    })
                } else {
                    Alert_popup(a.data, lang[0][23][0])
                }
                Ajax_close("")
            }, "json")
        };
        e[lang[0][32][1]] = function() {
            $(this).dialog("close");
            var b = {};
            b[lang[0][23][3]] = function() {
                $(this).dialog("close")
            };
            b[lang[0][23][1]] = function() {
                if ($("#bepopup-promt-text").val().length < 1) {
                    $("#bepopup-promt-text").addClass("ui-state-error")
                } else {
                    if (!isNumber($("#ball_warn").val())) {
                        $("#ball_warn").addClass("ui-state-error");
                        return false
                    }
                    var b = $("#bepopup-promt-text").val();
                    $(this).dialog("close");
                    $("#dlepopup").remove();
                    $.post(f, {
                        id: a,
                        actions: "up",
                        response: b,
                        ball: $("#ball_warn").val(),
                        log_warn: c
                    }, function(a) {
                        if (a.param == 1) {
                            $(d).text(a.ball);
                            Alert_popup(a.data, lang[0][23][0])
                        } else {
                            Alert_popup(a.data, lang[0][23][0])
                        }
                        Ajax_close("")
                    }, "json")
                }
            };
            $.post(g, {}, function(a) {
                if (a.param == 1) {
                    $("#bepopup").remove();
                    $("body").append("<div id='bepopup' title='" + a.lng[0] + a.user + "' style='display:none'>" + a.lng[1] + "<textarea name='bepopup-promt-text' id='bepopup-promt-text' class='ui-widget-content ui-corner-all' style='width:97%;height:100px; padding: .4em;'></textarea><dl class='pupopForumElementDl'><dt>" + a.lng[2] + '</dt><dd style="color:red">' + a.ball_user + "</dd></dl><dl class='pupopForumElementDl'><dt>" + a.lng[3] + "</dt><dd><input id='ball_warn' type='text' name='ball_warn' value='' size='50' maxlength='200' autocomplete='off'></dd></dl><div style=\"margin-top:10px;color:#969697\">" + a.lng[4] + "</div></div>");
                    $("#bepopup").dialog({
                        autoOpen: true,
                        show: "fade",
                        resizable: false,
                        width: 700,
                        buttons: b
                    })
                } else {
                    Alert_popup(a.data, lang[0][23][0])
                }
                Ajax_close("")
            }, "json")
        }
    }
    $.post(g, {}, function(a) {
        if (a) {
            if (a.param == 1) {
                $("#bepopup").remove();
                $("body").append("<div id='bepopup' title='" + a.title + "' style='display:none'>" + a.data + "</div>");
                $("#bepopup").dialog({
                    autoOpen: true,
                    show: "fade",
                    resizable: false,
                    width: 700,
                    buttons: e
                })
            } else {
                Alert_popup(a.data, lang[0][23][0])
            }
            Ajax_close("")
        }
    }, "json")
}

function pollEditor(a) {
    Ajax_Loading("");
    if (!a) {
        Alert_popup(lang[0][23][6], lang[0][23][0]);
        return false
    }
    var b = {};
    if (forum_cpu) {
        var c = dle_root + forum_path + "/vote-" + a + "/save";
        var d = dle_root + forum_path + "/vote-" + a + "/delete_vote";
        var e = dle_root + forum_path + "/vote-" + a + "/edit"
    } else {
        var c = dle_root + "index.php?do=" + forum_path + "&action=vote&id=" + a + "&param=save";
        var d = dle_root + "index.php?do=" + forum_path + "&action=vote&id=" + a + "&param=delete_vote";
        var e = dle_root + "index.php?do=" + forum_path + "&action=vote&id=" + a + "&param=edit"
    }
    b[lang[0][22][3]] = function() {
        $(this).dialog("close")
    };
    b[lang[0][31][1]] = function() {
        Ajax_Loading("");
        if (document.getElementById("vote_editor").vote_titl.value == "") {
            Alert_popup(lang[0][29][6], lang[0][23][0]);
            Ajax_close("");
            return false
        }
        var a = $("#vote_editor").serialize();
        $.post(c, {
            fetch: a
        }, function(a) {
            if (a.param == 1) {
                document.location = location.href.split("#")[0]
            } else {
                Alert_popup(lang[0][26], lang[0][23][0])
            }
            Ajax_close("")
        }, "json")
    };
    b[lang[0][23][5]] = function() {
        Ajax_Loading("");
        $.post(d, {}, function(a) {
            if (a.param == 1) {
                document.location = location.href.split("#")[0]
            } else {
                Alert_popup(lang[0][26], lang[0][23][0])
            }
            Ajax_close("")
        }, "json")
    };
    $.post(e, {
        id: a
    }, function(a) {
        if (a) {
            if (a.param == 1) {
                $("#bepopup").remove();
                $("body").append("<div id='bepopup' title='" + lang[0][23][7] + "' style='display:none'>" + a.data + "</div>");
                $("#bepopup").dialog({
                    autoOpen: true,
                    show: "fade",
                    resizable: false,
                    width: 550,
                    buttons: b
                })
            } else {
                Alert_popup(a.data, lang[0][23][0])
            }
        }
    }, "json");
    Ajax_close("")
}

function poll(a) {
    if (a == "go_poll") {
        $(".replicPoll ol").css("display", "block");
        $("#voteButton, #resultButton").css("display", "inline");
        $("#goVoteButton, .resultAjax").css("display", "none");
        return false
    }
    var b = $("input[class=pollInputTopic]:checked").val();
    if (a == "vote") {
        if (!b) {
            Alert_popup(lang[0][28][3], lang[0][23][0]);
            return false
        }
    }
    var c = $("#poll_submit").serialize();
    Ajax_Loading("");
    var d = $("input[name='vote_id']").val();
    if (forum_cpu) {
        var e = dle_root + forum_path + "/vote-" + d + "/" + a
    } else {
        var e = dle_root + "index.php?do=" + forum_path + "&action=vote&id=" + d + "&param=" + a
    }
    $.post(e, {
        fetch: c,
        actions: a
    }, function(b) {
        if (b.param == 1) {
            if (a == "result_all") {
                $(".resultAjax").remove();
                $("#voteButton, #resultButton, .replicPoll ol").css("display", "none");
                $("#goVoteButton").css("display", "inline")
            } else if (a == "vote") {
                $(".buttonsPoll").remove();
                $(".replicPoll ol").css("display", "none")
            }
            $(b.data).insertBefore(".replicPoll ol")
        }
    }, "json");
    Ajax_close("")
}

function deleteAnswerVote(a, b) {
    var c = $(".listBoxAnswer").length - 1;
    if (c == 0) {
        Alert_popup(lang[0][28][2], lang[0][23][0]);
        return false
    }
    if (b == 1) {
        var d = $("input[name='id_poll']").val();
        if (forum_cpu) {
            var e = dle_root + forum_path + "/vote-" + a + "/delete"
        } else {
            var e = dle_root + "index.php?do=" + forum_path + "&action=vote&id=" + a + "&param=delete"
        }
        $.post(e, {
            id: a,
            id_poll: d
        }, function(b) {
            if (b.param == 1) {
                $("tr#" + a).remove();
                $("#elementVoteForum_" + a).remove()
            }
        }, "json")
    } else {
        $("tr#" + a).remove()
    }
}

function addReplicVotePopup() {
    var a = new Date;
    $('<tr class="listBoxAnswer" id="' + a.getMilliseconds() + '"><td><a onclick="deleteAnswerVote(' + a.getMilliseconds() + ',0); return false;" href="#" class="deleteAnswerVote">�������</a></td><td><input type="text" autocomplete="off" name="new_vote_replic[]" value="" size="50" maxlength="100" style="width:250px !important" class="forum_input PopupElementInput"></td></tr>').insertBefore("#insert")
}

function Ajax_Loading(a) {
    if (a) {
        $("#loading-layer-text").html(a)
    }
    var b = ($(window).width() - $("#loading-layer").width()) / 2;
    var c = ($(window).height() - $("#loading-layer").height()) / 2;
    $("#loading-layer").css({
        left: b + "px",
        top: c + "px",
        position: "fixed",
        zIndex: "99"
    });
    $("#loading-layer").fadeTo("slow", .6)
}

function addReplicVote() {
    $('<dt> </dt><dd><input type="text" name="vote_replic[]" autocomplete="off" value="" size="50" maxlength="100" class="forum_input"></dd>').insertBefore(".insert_belov")
}

function doAddMessage() {
    var a = document.getElementById("message_add_form");
    if (a.text_msg.value == "") {
        Alert_popup(lang[0][29][6], lang[0][23][0]);
        return false
    }
    if (a.recaptcha_response_field) {
        var b = Recaptcha.get_response();
        var c = Recaptcha.get_challenge()
    } else if (a.question) {
        var b = a.question.value;
        var c = a.question_sec.value
    } else {
        var b = "";
        var c = ""
    }
    Ajax_Loading("");
    var d = new Array;
    $("#message_add_form input[class='marker_file_ajax']").each(function(a, b) {
        d.push($(b).val())
    });
    if (forum_cpu) {
        var e = dle_root + forum_path + "/add/" + a.topict_id.value + "/post"
    } else {
        var e = dle_root + "index.php?do=" + forum_path + "&action=newpost&id=" + a.topict_id.value + "&param=post"
    }
    $.post(e, {
        text_msg: a.text_msg.value,
        topic_id: a.topict_id.value,
        recaptcha_response_field: b,
        recaptcha_challenge_field: c,
        id_file: d
    }, function(b) {
        Ajax_close("");
        if (b.param == 0) {
            Alert_popup(b.data, lang[0][23][0]);
            return false
        } else if (b.param == 1) {
            if ($("#message-" + b.id).length) {
                $("#message-" + b.id).replaceWith(b.data)
            } else {
                $("#addNewMsg").append(b.data)
            }
            a.text_msg.value = "";
            $(".uploadify-queue-item").remove()
        } else if (b.param == 2) {
            $("#addNewMsg").append(b.data);
            a.text_msg.value = "";
            $(".uploadify-queue-item").remove()
        }
        setElementForum()
    }, "json")
}

function DropDownMenuTopicEdit(a, b, c, d, e) {
    var f = new Array;
    if (b) {
        f[0] = '<a onclick="postConfigure(\'delete\'); return false;" href="#">' + lang[0][29][0] + "</a>"
    }
    if (c == 0) {
        f[1] = '<a onclick="postConfigure(\'aprove\'); return false;" href="#">' + lang[0][29][1] + "</a>"
    }
    if (c == 0) {
        f[2] = '<a onclick="postConfigure(\'unaprove\'); return false;" href="#">' + lang[0][29][2] + "</a>"
    }
    if (d) {
        f[3] = '<a onclick="postConfigure(\'move\'); return false;" href="#">' + lang[0][29][3] + "</a>"
    }
    if (e & $("input.markerElementForum:checked").length > 1) {
        f[4] = '<a onclick="postConfigure(\'merge\'); return false;" href="#">' + lang[0][29][4] + "</a>"
    }
    return f
}

function BeAlert(a, b) {
    $("#bepopup").remove();
    $("body").append("<div id='bepopup' title='" + b + "' style='display:none'>" + a + "</div>");
    $("#bepopup").dialog({
        autoOpen: true,
        width: 470,
        resizable: false,
        dialogClass: "modalfixed",
        buttons: {
            Ok: function() {
                $(this).dialog("close");
                $("#dlepopup").remove()
            }
        }
    });
    $(".modalfixed.ui-dialog").css({
        position: "fixed"
    });
    $("#bepopup").dialog("option", "position", ["0", "0"])
}

function postConfigure(a) {
    if ($("input.markerElementForum:checked").length == 0) {
        Alert_popup(lang[0][30][1], lang[0][23][0]);
        return false
    }
    if (forum_cpu) {
        var b = dle_root + forum_path + "/post_mass/" + a
    } else {
        var b = dle_root + "index.php?do=" + forum_path + "&action=post_mass&param=" + a
    }
    var c = new Array;
    $("input.markerElementForum:checked").each(function(a, b) {
        c.push($(b).val())
    });
    if (a == "merge" || a == "aprove" || a == "unaprove") {
        $.post(b, {
            param: a,
            element: c
        }, function(a) {
            if (a) {
                if (a.param == 1) {
                    document.location = location.href.split("#")[0];
                    return
                } else if (a.param == 2) {
                    document.location = a.data;
                    return
                } else {
                    Alert_popup(a.data, lang[0][23][0])
                }
            } else {
                Alert_popup(lang[0][30][0], lang[0][23][0])
            }
        }, "json")
    }
    if (a == "delete") {
        if ($("input.markerElementForum:checked").length == $("#countPostSelect").attr("data-count") || $("input.markerElementForum:checked").length > $("#countPostSelect").attr("data-count")) {
            var d = {};
            d[lang[0][23][2]] = function() {
                $(this).dialog("close")
            };
            d[lang[0][23][5]] = function() {
                $.post(b, {
                    param: a,
                    element: c,
                    pm: $("#delete_topic").val()
                }, function(a) {
                    if (a) {
                        if (a.param == 1) {
                            document.location = location.href.split("#")[0];
                            return
                        } else if (a.param == 2) {
                            document.location = a.data;
                            return
                        } else {
                            Alert_popup(a.data, lang[0][23][0])
                        }
                    } else {
                        Alert_popup(lang[0][30][0], lang[0][23][0])
                    }
                }, "json")
            };
            $("#bepopup").remove();
            $("body").append("<div id='bepopup' title='" + lang[0][23][0] + "' style='display:none'>" + lang[0][33] + '<textarea style="width: 97% ! important;display: block; margin-top: 5px; float: left;" id="delete_topic" name="delete_topic_pm" cols="" class="option_topic_popup" rows="4"></textarea></div>');
            $("#bepopup").dialog({
                autoOpen: true,
                width: 500,
                resizable: false,
                show: "fade",
                buttons: d
            })
        } else {
            $.post(b, {
                param: a,
                element: c
            }, function(a) {
                if (a) {
                    if (a.param == 1) {
                        document.location = location.href.split("#")[0];
                        return
                    } else if (a.param == 2) {
                        document.location = a.data;
                        return
                    } else {
                        Alert_popup(a.data, lang[0][23][0])
                    }
                } else {
                    Alert_popup(lang[0][30][0], lang[0][23][0])
                }
            }, "json")
        }
    }
    if (a == "move") {
        $.post(b, {
            param: "move",
            element: c
        }, function(a) {
            var b = 2;
            var d = {};
            d[lang[0][23][2]] = function() {
                $(this).dialog("close")
            };
            d[lang[0][29][5]] = function() {
                if (forum_cpu) {
                    var a = dle_root + forum_path + "/post_mass/move_stage"
                } else {
                    var a = dle_root + "index.php?do=" + forum_path + "&action=post_mass&param=move_stage"
                }
                $.post(a, {
                    param: "move_stage",
                    element: c,
                    type: $('select[name="move_type"]').val(),
                    tree: $('select[name="new_tree"]').val(),
                    titl_new: $('input[name="titl"]').val(),
                    titl: $('input[name="titl_move"]').val(),
                    id_new: b
                }, function(a) {
                    if (!a) {
                        Alert_popup(lang[0][30][0], lang[0][23][0])
                    }
                    if (a.param == 1) {
                        document.location = location.href.split("#")[0];
                        return
                    } else if (a.param == 2) {
                        document.location = a.data;
                        return
                    } else {
                        Alert_popup(a.data, lang[0][23][0])
                    }
                }, "json")
            };
            $("#bepopup").remove();
            $("body").append("<div id='bepopup' title='" + a.title + "' style='display:none'>" + a.data + "</div>");
            $("#bepopup").dialog({
                autoOpen: true,
                width: 500,
                resizable: false,
                show: "fade",
                buttons: d
            });
            $(document).ready(function() {
                $('select[name="move_type"]').change(function() {
                    $("#newTopicCreate, #moveRevTopic").css("display", "none");
                    if ($(this).val() == 1) {
                        $("#newTopicCreate").css("display", "table")
                    } else {
                        $("#moveRevTopic").css("display", "table")
                    }
                })
            })
        }, "json")
    }
}

function DropDownMenuForum(a, b, c, d) {
    if (window.event) event.cancelBubble = true;
    else if (b.stopPropagation) b.stopPropagation();
    var e = $("#dropmenudiv");
    if (e.is(":visible")) {
        clearhidemenu();
        e.fadeOut("fast");
        return false
    }
    e.remove();
    $("body").append('<div id="dropmenudiv" style="display:none;position:absolute;z-index:100;width:165px;"></div>');
    e = $("#dropmenudiv");
    e.html(c.join(""));
    if (d) e.width(d);
    var f = $(document).width() - 15;
    var g = $(a).offset();
    if (f - g.left < e.width()) g.left = g.left - (e.width() - a.offsetWidth);
    e.css({
        left: g.left + "px",
        top: g.top + a.offsetHeight + "px"
    });
    e.fadeTo("fast", .9);
    e.mouseenter(function() {
        clearhidemenu()
    }).mouseleave(function() {
        delayhidemenu()
    });
    $(document).one("click", function() {
        hidemenu()
    });
    return false
}

function doWarningDelete(a, b) {
    BEconfirm(lang[0][31][5], lang[0][23][4], function() {
        if (forum_cpu) {
            var c = dle_root + forum_path + "/warning-" + b + "/" + a + "/delete"
        } else {
            var c = dle_root + "index.php?do=" + forum_path + "&action=warning&id=" + b + "&log_warn=" + a + "&param=delete"
        }
        $.post(c, {}, function(a) {
            if (a.param == 1) {
                $("#warning-" + b).text(a.ball);
                Alert_popup(a.data, lang[0][23][0])
            } else {
                Alert_popup(lang[0][26], lang[0][23][0])
            }
        }, "json")
    });
    return false
}

function getMessageLinck(a) {
    Alert_popup('<input class="w100 PopupElementInput msgLinck" value="' + $("#message-" + a + " .getMessageLinck").attr("href") + '" />', lang[0][31][4])
}

function cloneElementVoteOut() {
    $('<input type="text" name="vote_qot[]" value="" size="50" maxlength="200" class="forum_input">').insertBefore(".voteOut")
}

function blockCase(a, b) {
    if ($("input:checkbox[name=" + a + "]:checked").val() == 1) {
        $("#" + b).css("display", "table")
    } else {
        $("#" + b).css("display", "none")
    }
}

function MsgEditCancel(a) {
    $("#message-" + a).html(cache[a]);
    $(".colorpicker").remove();
    selField = "text_msg";
    fombj = document.forms["message_add_form"];
    $("#file_upload_editor").uploadify("destroy");
    setElementForum()
}

function DelAttach(a, b) {
    if (forum_cpu) {
        var c = dle_root + forum_path + "/set/attachment_delete"
    } else {
        var c = dle_root + "index.php?do=" + forum_path + "&action=set&param=attachment_delete"
    }
    $.post(c, {
        id: a,
        hash: b
    }, function(b) {
        if (b == "ok") {
            $("#" + a).remove()
        } else if (b == "die") {
            Alert_popup(lang[0][26], lang[0][23][0])
        }
    })
}

function isNumber(a) {
    return !isNaN(parseFloat(a)) && isFinite(a)
}

function ShowHide(a) {
    var b = $("#" + a);
    if (document.getElementById("image-" + a)) {
        var c = document.getElementById("image-" + a)
    } else {
        var c = null
    }
    if (b.css("display") == "none") {
        b.show();
        if (c) {
            c.src = dle_root + "templates/" + dle_skin + "/bullet_energy/images/bullet_icons/spoiler-minus.gif"
        }
    } else {
        b.hide();
        if (c) {
            c.src = dle_root + "templates/" + dle_skin + "/bullet_energy/images/bullet_icons/spoiler-plus.gif"
        }
    }
}

function topicUnFeed(a) {
    Ajax_Loading("");
    if (forum_cpu) {
        var b = dle_root + forum_path + "/feed/" + a + "/watch"
    } else {
        var b = dle_root + "index.php?do=" + forum_path + "&action=feed&id=" + a + "&param=watch"
    }
    $.post(b, {}, function(a) {
        $("#feedClick").replaceWith(a.link);
        $("#bepopup").remove();
        $("body").append("<div id='bepopup' title='" + a.title + "' style='display:none'><br>" + a.data + "</div>");
        var b = {};
        b["Ok"] = function() {
            $(this).dialog("close");
            $("#bepopup").remove()
        };
        $("#bepopup").dialog({
            autoOpen: true,
            show: "fade",
            resizable: false,
            width: 500,
            buttons: b
        })
    }, "json");
    Ajax_close("")
}

function topicFeed(a) {
    Ajax_Loading("");
    if (forum_cpu) {
        var b = dle_root + forum_path + "/feed/" + a + "/confirm";
        var c = dle_root + forum_path + "/feed/" + a + "/watch"
    } else {
        var b = dle_root + "index.php?do=" + forum_path + "&action=feed&id=" + a + "&param=confirm";
        var c = dle_root + "index.php?do=" + forum_path + "&action=feed&id=" + a + "&param=watch"
    }
    $.getJSON(b, {}, function(a) {
        $("#bepopup").remove();
        $("body").append("<div id='bepopup' title='" + a.title + "' style='display:none'><br>" + a.data + "</div>");
        var b = {};
        var d = {};
        b[lang[0][22][3]] = function() {
            $(this).dialog("close");
            $("#bepopup").remove()
        };
        d["Ok"] = function() {
            $(this).dialog("close");
            $("#bepopup").remove()
        };
        b[lang[0][31][3]] = function() {
            $.post(c, {
                email_watch: $("input:radio[name=email_watch]:checked").val()
            }, function(a) {
                $("#feedClick").replaceWith(a.link);
                $("#bepopup").remove();
                $("body").append("<div id='bepopup' title='" + a.title + "' style='display:none'><br>" + a.data + "</div>");
                $("#bepopup").dialog({
                    autoOpen: true,
                    show: "fade",
                    resizable: false,
                    width: 500,
                    buttons: d
                })
            }, "json")
        };
        $("#bepopup").dialog({
            autoOpen: true,
            show: "fade",
            resizable: false,
            width: 500,
            buttons: b
        })
    });
    Ajax_close("");
    return false
}

function getAllLike(a) {
    Ajax_Loading("");
    if (forum_cpu) {
        var b = dle_root + forum_path + "/post/" + a + "/like_all"
    } else {
        var b = dle_root + "index.php?do=" + forum_path + "&action=post&id=" + a + "&param=like_all"
    }
    $.post(b, {}, function(a) {
        if (a.param == 1) {
            var b = {};
            $("#bepopup").remove();
            $("body").append("<div id='bepopup' title='" + a.titl + "' style='display:none'>" + a.data + "</div>");
            b[lang[0][22][3]] = function() {
                $(this).dialog("close");
                $("#bepopup").remove()
            };
            $("#bepopup").dialog({
                autoOpen: true,
                show: "fade",
                resizable: false,
                width: 500,
                buttons: b
            })
        }
    }, "json");
    Ajax_close("");
    return false
}

function userDeleteTopicPrivate(a, b) {
	Ajax_Loading("");
	if (forum_cpu) {
		var c = dle_root + forum_path + "/set/param_private_topic"
	}
	else {
		var c = dle_root + "index.php?do=" + forum_path + "&action=set&param=param_private_topic"
	}
	$.post(c, {
		id: a,
		user: b,
		is_param: "remove"
	}, function(a) {
		if (a.param == 1) {
			$(".userPrivateBlock ul").replaceWith(a.data);
		}
		Ajax_close("")
	}, "json")
}

function topicPrivateParam(a) {
    Ajax_Loading("");
    if (forum_cpu) {
        var b = dle_root + forum_path + "/editor/private_topic"
    } else {
        var b = dle_root + "index.php?do=" + forum_path + "&action=editor&param=private_topic"
    }
    $.post(b, {
        id: a
    }, function(a) {
        if (a.param == 0) {
            Alert_popup(a.data, lang[0][23][0]);
            return
        }
        $("#bepopup").remove();
        $("body").append("<div id='bepopup' title='" + a.titl + "' style='display:none'>" + a.data + "</div>");
        var c = {};
        c[lang[0][22][3]] = function() {
            $(this).dialog("close");
            $("#bepopup").remove()
        };
        c[lang[0][31][1]] = function() {
            var a = $("input:checkbox[name=is_private]").is(":checked") ? 1 : 0;
            $.post(b, {
                is_param: "save",
                user_new: $("input[name='new_private_user']").val(),
                id: $("input[name='id_topic']").val(),
                status: a
            }, function(b) {
                Ajax_close("");
                if (b.param == 1) {
                    if (a == 0) {
                        document.location = location.href.split("#")[0];
                        return
                    }
                    $("#new_private_user").attr("value", "");
                    $(".userPrivateBlock ul").replaceWith(b.data)
                } else {
                    Alert_popup(b.data, lang[0][23][0])
                }
            }, "json")
        };
        $("#bepopup").dialog({
            autoOpen: true,
            show: "fade",
            resizable: false,
            width: 500,
            buttons: c
        })
    }, "json");
    Ajax_close("")
}

function topicOption(a) {
    Ajax_Loading("");
    if (forum_cpu) {
        var b = dle_root + forum_path + "/editor/topic";
        var c = dle_root + forum_path + "/set/save_topic"
    } else {
        var b = dle_root + "index.php?do=" + forum_path + "&action=editor&param=topic";
        var c = dle_root + "index.php?do=" + forum_path + "&action=set&param=save_topic"
    }
    $.post(b, {
        id: a
    }, function(a) {
        $("#bepopup").remove();
        $("body").append("<div id='bepopup' title='" + lang[0][31][0] + "' style='display:none'>" + a + "</div>");
        $(document).ready(function() {
            var a = $('select[name="new_tree"]').val();
            $('select[name="new_tree"]').change(function() {
                if (a != $(this).val()) {
                    $("#new_tree_pm").css("display", "block")
                } else {
                    $("#new_tree_pm").css("display", "none")
                }
            });
            $('select[name="visible_param"]').change(function() {
                if ($(this).val() == 0) {
                    $("#delete_topic").css("display", "block")
                } else {
                    $("#delete_topic").css("display", "none")
                }
            })
        });
        var b = {};
        b[lang[0][22][3]] = function() {
            $(this).dialog("close");
            $("#bepopup").remove()
        };
        b[lang[0][31][1]] = function() {
            $.post(c, {
                id: $("input[name='idTopic']").val(),
                topic_name: $("input[name='titl']").val(),
                topic_status: $("input:checkbox[name=status]").is(":checked") ? 1 : 0,
                topic_fixed: $("input:checkbox[name=fixed]").is(":checked") ? 1 : 0,
                topic_fixed_post: $("input:checkbox[name=fixed_post]").is(":checked") ? 1 : 0,
                topic_visible: $("select[name='visible_param'] :selected").val(),
                topic_tree_new: $("select[name='new_tree'] :selected").val(),
                topic_decription: $("#option_topic").val(),
                topic_new_pm: $("#new_tree_pm").val(),
                topic_delete_pm: $("#delete_topic").val()
            }, function(a) {
                Ajax_close("");
                if (a == "die") {
                    Alert_popup(lang[0][26], lang[0][23][0])
                } else if (a == "no_edit") {
                    Alert_popup(lang[0][31][2], lang[0][23][0])
                } else if (a == "ok") {
                    document.location = location.href.split("#")[0];
                    return
                }
            })
        };
        $("#bepopup").dialog({
            autoOpen: true,
            show: "fade",
            resizable: false,
            width: 500,
            buttons: b
        })
    });
    Ajax_close("")
}

function doTopicPreview(a) {
    var b = $("#topic_item-" + a + " .icon .topicPreview").attr("data-type");
    $("ol#topicPreview").hide("blind", {}, 500);
    $("ol#topicPreview").remove();
    $("#contentBoxAppendTo li").removeClass("elementShowPreview");
    if (b == 1) {
        $("span.topicPreview").removeClass("loaderParamTopic, loaderParamCloze");
        $("#topic_item-" + a + " .icon .topicPreview").removeAttr("data-type");
        return false
    }
    $(".icon .topicPreview").removeAttr("data-type");
    $("span.topicPreview").removeClass("loaderParamTopic, loaderParamCloze");
    $("#topic_item-" + a + " .icon .topicPreview").addClass("loaderParamTopic");
    if (preview[a]) {
        $("#topic_item-" + a).after(preview[a]);
        $("#topic_item-" + a + " .icon .topicPreview").removeClass("loaderParamTopic");
        $("#topic_item-" + a + " .icon .topicPreview").attr("data-type", 1);
        $("#topic_item-" + a + " .icon .topicPreview").addClass("loaderParamCloze");
        $("#topic_item-" + a).addClass("elementShowPreview");
        $("ol#topicPreview").show("blind", {}, 500);
        return false
    }
    if (forum_cpu) {
        var c = dle_root + forum_path + "/preview"
    } else {
        var c = dle_root + "index.php?do=" + forum_path + "&action=preview"
    }
    $.post(c, {
        id: a,
        param: "topic"
    }, function(b) {
        if (b.param == 1) {
            $("#topic_item-" + a).after(b.data);
            $("#topic_item-" + a + " .icon .topicPreview").removeClass("loaderParamTopic");
            $("#topic_item-" + a + " .icon .topicPreview").attr("data-type", 1);
            $("#topic_item-" + a + " .icon .topicPreview").addClass("loaderParamCloze");
            $("#topic_item-" + a).addClass("elementShowPreview");
            $("ol#topicPreview").show("blind", {}, 500);
            preview[a] = $("ol#topicPreview")
        } else {
            $("#topic_item-" + a + " .icon .topicPreview").removeClass("loaderParamTopic");
            Alert_popup(b.data, lang[0][23][0])
        }
    }, "json");
    return false
}

function fast_insert(a) {
    if (!document.getElementById("message_add_form")) return false;
    var b = document.getElementById("message_add_form").text_msg;
    b.focus();
    if (be_txt != "") {
        b.value += be_txt
    } else {
        b.value += "[b]" + a + "[/b]," + "\n"
    }
}

function copy_fast_insert(a) {
    be_txt = "";
    if (window.getSelection) {
        be_txt = window.getSelection()
    } else if (document.selection) {
        be_txt = document.selection.createRange().text
    }
    if (be_txt != "") {
        be_txt = "[quote=" + a + "]" + be_txt + "[/quote]\n"
    }
}

function doTopicGetAjax() {
    var a = $("#ajaxGetTopic").attr("data-type");
    if (!a) {
        Alert_popup(lang[0][25], lang[0][23][0]);
        return false
    }
    Ajax_Loading("");
    $.post(document.URL, {
        action: "categories",
        page: a
    }, function(a) {
        if (a.param == 1) {
            $("#paginationForum").replaceWith(a.pagination);
            $("#ajaxGetTopic").replaceWith(a.linck);
            $(a.data).appendTo("#contentBoxAppendTo")
        } else {
            Alert_popup(lang[0][26], lang[0][23][0])
        }
    }, "json");
    Ajax_close("");
    return false
}

function doPreview(a) {
    Ajax_Loading("");
    if (a == "topic") {
        var b = document.getElementById("new_topic").message_new_topic.value
    }
    $.post(document.URL, {
        param: "preview",
        data: b
    }, function(a) {
        if (a.param == 1) {
            $("#bepopup").remove();
            $("body").append("<div id='bepopup' title='" + a.titl + "' style='display:none'>" + a.data + "</div>");
            var b = {};
            b[lang[0][23][3]] = function() {
                $(this).dialog("close");
                $("#bepopup").remove()
            };
            var c = $("#dle-content").width();
            if (!c) {
                c = 700
            }
            $("#bepopup").dialog({
                autoOpen: true,
                show: "fade",
                resizable: false,
                width: c,
                buttons: b
            })
        } else {
            if (a.data) {
                Alert_popup(a.data, lang[0][23][0])
            } else {
                Alert_popup(lang[0][26], lang[0][23][0])
            }
        }
    }, "json");
    Ajax_close("");
    return false
}

function BEprompt(a, b, c, d, e) {
    var f = {};
    f[lang[0][22][3]] = function() {
        $(this).dialog("close")
    };
    f[lang[0][22][2]] = function() {
        if (!e && $("#bepopup-promt-text").val().length < 1) {
            $("#bepopup-promt-text").addClass("ui-state-error")
        } else {
            var a = $("#bepopup-promt-text").val();
            $(this).dialog("close");
            $("#bepopup").remove();
            if (d) d(a)
        }
    };
    $("#bepopup").remove();
    $("body").append("<div id='bepopup' title='" + c + "' style='display:none'><p>" + a + "</p><input type='text' name='bepopup-promt-text' id='bepopup-promt-text' class='ui-widget-content ui-corner-all' style='width:97%; padding: .4em;' value='" + b + "'/></div>");
    $("#bepopup").dialog({
        autoOpen: true,
        width: 470,
        buttons: f
    });
    if (b.length > 0) {
        $("#bepopup-promt-text").select().focus()
    } else {
        $("#bepopup-promt-text").focus()
    }
}

function getTrophiesUser(a) {
    Ajax_Loading("");
    $.getJSON(a.href, {}, function(a) {
        if (a.param == 1) {
            $("#bepopup").remove();
            $("body").append("<div id='bepopup' title='" + a.titl + "' style='display:none'>" + a.data + "</div>");
            var b = {};
            b[lang[0][23][3]] = function() {
                $(this).dialog("close");
                $("#bepopup").remove()
            };
            $("#bepopup").dialog({
                autoOpen: true,
                show: "fade",
                resizable: false,
                width: 500,
                buttons: b
            })
        }
    }, "json");
    Ajax_close("");
    return false
}

function like(a, b) {
    Ajax_Loading("");
    $.getJSON(b.href, {}, function(b) {
        if (b.param == 0) {
            Alert_popup(b.data, lang[0][23][0])
        } else if (b.param == 1) {
            $("#message-" + a + " .likeContent").replaceWith(b.linck);
            $(".likeBox-" + a).replaceWith(b.likeBlock)
        }
    });
    Ajax_close("")
}

function getAllLike(a, b) {
    Ajax_Loading("");
    $.post(b.href, {}, function(a) {
        if (a.param == 1) {
            $("#bepopup").remove();
            $("body").append("<div id='bepopup' title='" + a.titl + "' style='display:none'>" + a.data + "</div>");
            var b = {};
            b[lang[0][23][3]] = function() {
                $(this).dialog("close");
                $("#bepopup").remove()
            };
            $("#bepopup").dialog({
                autoOpen: true,
                show: "fade",
                resizable: false,
                width: 500,
                buttons: b
            })
        }
    }, "json");
    Ajax_close("");
    return false
}

function MsgEdit(a, b) {
    Ajax_Loading("");
    cache[a] = $("#message-" + a).html();
    $.getJSON(b.href, {}, function(b) {
        if (b.param == 0) {
            Alert_popup(b.data, lang[0][23][0])
        } else if (b.param == 1) {
            $("#message-" + a + " .controlMsgBox").hide();
            $("#message-" + a + " .configureMessage").hide();
            $("#MsgTextBox-" + a).html(b.data)
        }
        Ajax_close("")
    })
}

function DeleteMsg(a, b) {
    BEconfirm(lang[0][24], lang[0][23][4], function() {
        $.getJSON(b.href, {}, function(b) {
            Alert_popup(b.data, lang[0][23][0]);
            if (b.param == 2) {
                setTimeout(document.location = b.url, 5e3)
            }
            if (b.param == 1) {
                $("#message-" + a).remove()
            }
        })
    })
}

function topicConfigure(a) {
    if ($("input.markerElementForum:checked").length == 0) {
        Alert_popup(lang[0][27], lang[0][23][0]);
        return
    }
    Ajax_Loading("");
    if (forum_cpu) {
        var b = dle_root + forum_path + "/set/global_operation"
    } else {
        var b = dle_root + "index.php?do=" + forum_path + "&action=set&param=global_operation"
    }
    var c = new Array;
    $("input.markerElementForum:checked").each(function(a, b) {
        c.push($(b).val())
    });
    $.post(b, {
        arrUnFeed: c,
        action_type: a
    }, function(d) {
        Ajax_close("");
        if (d.param == 1) {
            if (a == "delete") {
                document.location = location.href.split("#")[0];
                return
            } else if (a == "move") {
                var e = {};
                $("#topicPreview").remove();
                $("#bepopup").remove();
                $("body").append("<div id='bepopup' title='" + lang[0][23][0] + "' style='display:none'>" + d.data + "</div>");
                e[lang[0][28][1]] = function() {
                    $.post(b, {
                        arrUnFeed: c,
                        action_type: "move_complit",
                        new_tree: $("#new_tree").val()
                    }, function(a) {
                        document.location = location.href.split("#")[0];
                        return
                    })
                };
                $("#bepopup").dialog({
                    autoOpen: true,
                    show: "fade",
                    resizable: false,
                    width: 500,
                    buttons: e
                })
            } else if (a == "merge") {
                var e = {};
                e[lang[0][28][0]] = function() {
                    $.post(b, {
                        arrUnFeed: c,
                        action_type: "merge_complit",
                        new_name: $("#new_name").val()
                    }, function(a) {
                        document.location = location.href.split("#")[0];
                        return
                    })
                };
                $("#topicPreview").remove();
                $("#bepopup").remove();
                $("body").append("<div id='bepopup' title='" + lang[0][23][0] + "' style='display:none'>" + d.data + "</div>");
                $("#bepopup").dialog({
                    autoOpen: true,
                    show: "fade",
                    resizable: false,
                    width: 500,
                    buttons: e
                })
            } else {
                document.location = location.href.split("#")[0];
                return
            }
        } else {
            Alert_popup(d.data, lang[0][23][0])
        }
    }, "json")
}
var cache = new Array;
var preview = new Array;
var imageAlign = "none";
var setAllAligin = 0;