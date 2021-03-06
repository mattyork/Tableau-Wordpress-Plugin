﻿/**
 * $Id: editor_plugin_src.js  2012-04-29 maid0marion $
 *
 * @author maid0marion
 */	
(function() {
    tinymce.create('tinymce.plugins.TableauPlugin', {
        init : function(ed, url) {
			
			// Register commands
			ed.addCommand('mceTableau', function() {
				ed.windowManager.open({
					file : url + '/tableau.htm',
					width : 400,
					height : 400,
					inline : 1
				}, {
					plugin_url : url
				});
			});

			// Register buttons
            ed.addButton('tableau', {
                title : 'Embed Tableau Server Viz',
				cmd : 'mceTableau',
                image : url+'/img/tableau.png',
				
				
            });
        },
        createControl : function(n, cm) {
            return null;
        },
        getInfo : function() {
            return {
                longname : "Tableau",
                author : 'Julie Repass',
                authorurl : '',
                infourl : '',
                version : "1.0"
            };
        }
    });
    tinymce.PluginManager.add('tableau', tinymce.plugins.TableauPlugin);
})();

