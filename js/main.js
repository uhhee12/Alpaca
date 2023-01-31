$(document).ready(function () {
              var arr = ['#button-group1', '#button-group2', '#button-group3'];
            $.each(arr, function (index) {
                var wrapperId = arr[index];
                var buttons = $(wrapperId).find('button');
                buttons.click(function () {
                    buttons.removeClass('click');
                    $(this).addClass('click');
                });
            });

            $('ul.tabs li').click(function () {
                var tab_id = $(this).attr('data-tab');

                $('ul.tabs li').removeClass('current');
                $('.tab-content').removeClass('current');

                $(this).addClass('current');
                $("#" + tab_id).addClass('current');
            });

            $('#main-lobtn').click(function () {
                $('#login-pop').css("display", "block");
            });

            $('#main-add').click(function () {
                $('#main-add-box').css("display", "block");
            });

            $('.slide-up').click(function () {
                $('.hide-ul').slideToggle(300);
            }); /*즐겨찾기 슬라이드*/ 

            $('.sub-menu-p').click(function () {
                $(this).next('.sub-menu-list').slideToggle();
            }); /*즐겨찾기 설정 오른쪽 박스 슬라이드 */

            $('#book-btn').click(function () {
                $('#bookmark-pop').css("display", "block");
            }); /*즐겨찾기  설정팝업*/

            $('#pop-close, .close-box button').click(function () {
                $('#bookmark-pop').css("display", "none");
            });/*즐겨찾기 찹업 닫기 */

            $('#work-pop').click(function () {
                $('#work-list').css("display", "block");
            }); /*최근작업내역 팝업 */

            $('.main-noti li').click(function () {
                $('#notice').css("display", "block");
            }); /*공지사항 팝업 */
    
            $("header .menu > li").hover(function () {
                $(this).children(".sub-menu").fadeToggle(100);
            });

            $(".set-box").hover(function () {
                $(this).children(".sub-menu").fadeToggle(100);
            }); /*오른쪽 위 설정메뉴 */

            $('#internal').click(function () {
                $('#mian-Internal').css("display", "block");
            }); /*내정보 관리 */

            $(".profile").click(function () {
                // $(this).children('.down').toggleClass('rotate');
                $(".profile-inner").slideToggle(250);
            }); /*프로필 슬라이드 */

            $(".img-x").click(function () {
                $(this).parent().parent(".guide-pop").css("display","none");
            }); /*팝업 닫기 */

            $(".pop-btn-box button").click(function () {
                $(this).parent().parent().parent(".guide-pop").css("display","none");
            }); /*팝업 닫기 */


            $(function () {
                $(".datepicker").datepicker({
                    language: 'ko-KR',
                    format: 'yyyy-mm-dd'
                });
            });
        });


        function fnCheckAll(checkBoxID, buttonID) {
            var elements = document.getElementsByName(checkBoxID);
            [].forEach.call(elements, function (element) {
                var btnCheckAll = document.getElementById(buttonID);
                if (btnCheckAll.checked) {
                    element.checked = true;
                } else {
                    element.checked = false;
                }
            });
        }
        

