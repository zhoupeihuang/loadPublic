(function($) {
	$.fn.extend({
		"loadPublic": function(options) {
			//检测数据有效性
			if(!isValid(options)) {
				console.log("参数有问题");
				return this;
			}
			var opts = $.extend({}, defaluts, options),
				$this = $(this),
				ajaxobj = new AJAXRequest;
			ajaxobj.method = "GET";
			ajaxobj.url = opts.path
			ajaxobj.callback = function(xmlobj) {
				$this.html(xmlobj.responseText);
			}
			ajaxobj.send(); // 发送请求
			return this;

		}

	});
	//默认参数
	var defaluts = {
		path: "template/index.html",
	};
	//私有方法，检测参数是否合法
	function isValid(options) {
		return !options || (options && typeof options === "object") ? true : false;
	}
	//原始方法
	function AJAXRequest() {
		var xmlObj = false;
		var CBfunc, ObjSelf;
		ObjSelf = this;
		try {
			xmlObj = new XMLHttpRequest;
		} catch(e) {
			try {
				xmlObj = new ActiveXObject("MSXML2.XMLHTTP");
			} catch(e2) {
				try {
					xmlObj = new ActiveXObject("Microsoft.XMLHTTP");
				} catch(e3) {
					xmlObj = false;
				}
			}
		}
		if(!xmlObj) return false;
		this.method = "POST";
		this.url;
		this.async = true;
		this.content = "";
		this.callback = function(cbobj) {
			return;
		}
		this.send = function() {
			if(!this.method || !this.url || !this.async) return false;
			xmlObj.open(this.method, this.url, this.async);
			if(this.method == "POST") xmlObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			xmlObj.onreadystatechange = function() {
				if(xmlObj.readyState == 4) {
					if(xmlObj.status == 200) {
						ObjSelf.callback(xmlObj);
					}
				}
			}
			if(this.method == "POST") xmlObj.send(this.content);
			else xmlObj.send(null);
		}
	}
})(jQuery)