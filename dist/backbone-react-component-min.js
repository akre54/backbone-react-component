!function(a,b){"function"==typeof define&&define.amd?define(["react","backbone","underscore"],b):(a.Backbone.React||(a.Backbone.React={}),a.Backbone.React.Component=b(React,Backbone,_))}(window,function(a,b,c){"use strict";return b.React||(b.React={}),b.React.Component=function(a){this.cid=c.uniqueId(),this.options=c.defaults(a||{},{}),this.setElement(this.options.el),delete this.options.el,this.model=this.options.model,delete this.options.model,this.model&&this.startModelListeners()},b.React.Component.extend=function(){var d=arguments[0],e=a.createClass(d),f=function(){var a=new e(arguments[0],arguments[1]);return c.extend(a,b.React.Component.prototype),b.React.Component.apply(a,arguments),a};return f.extend=function(){return b.React.Component.extend(c.extend({},d,arguments[0]))},f},c.extend(b.React.Component.prototype,b.Events,{componentDidMount:function(){this.setElement(this.getDOMNode())},remove:function(){this.stopListening(),this.$el&&(a.unmountComponentAtNode(this.$el),this.$el.remove())},renderComponent:function(b,c){return b||this.el?(b||(b=this.el),!c&&this.model&&(c=this.setPropsModel.bind(this)),a.renderComponent(this,b,c),this.isRendered=!0,this):void 0},setElement:function(a){if(a)if($)if(a instanceof $){if(!a.length)throw new Error("DOM element unspecified");if(a.length>1)throw new Error("More than one DOM element specified");this.$el=a,this.el=a[0]}else this.$el=$(a),this.el=a;else this.el=a},setPropsModel:function(){return this.replaceProps(this.model.toJSON())},startModelListeners:function(){var a,b;if(this.events)for(a in this.events)b="function"==typeof this.events[a]?this.events[a]:this[this.events[a]],this.listenTo(this.model,a,b);else{var c=function(){this.isRendered?this.setPropsModel():this.renderComponent(null,this.setPropsModel.bind(this))};this.listenTo(this.model,"change",c).listenTo(this.model,"change:*",c).listenTo(this.model,"add:*",c).listenTo(this.model,"remove:*",c)}}}),b.React.Component});