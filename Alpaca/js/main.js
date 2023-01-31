        $(document).ready(function () {
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
        

