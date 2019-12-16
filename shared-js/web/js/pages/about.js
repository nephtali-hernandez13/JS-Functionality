(function(context){

    function renderAnswer(answer) {
        var html = View.getPartialHTML("/about#answer", {
            answer: answer
        });
        $("[rel='js-answer']").replaceWith(html);
    }


    function gimme(evt) {
        var $local = $("[rel='js-local']");
        var min = $("[rel='js-min']").val();
        var max = $("[rel='js-max']").val();

        if(ValidityState.checkMinMax(min,max)){
            if($local.is(":checked")) {            
                renderAnswer( Foo.random(min,max) );        
            } else {
                $.ajax( "/Foo",{
                    data: {
                        min: min,
                        max: max
                    }
                } ).then( function(resp) {
                    if(resp.answer) {
                        renderAnswer( Foo.random( resp.answer ) );                        
                    } else {
                        renderAnswer( resp.error );
                    }
                } );
            }
        } else {
            renderAnser("Oops, min/max are wrong.");
        }   
    }

	function init(){
        $("[rel='js-gimme']").click(gimme);
    }

	function teardown(){}

	Pages.page_scripts["/about"] = {
		init: init,
		teardown: teardown
	};

})(window);
