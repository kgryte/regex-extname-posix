'use strict';

// Modified from https://github.com/nodejs/node/blob/1a3b295d0f46b2189bd853800b1e63ab4d106b66/lib/path.js#L406
var re = /^(?:\/?|)(?:[\s\S]*?)(?:(?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
/*
	Captures a POSIX filename extension.

	\^
		-	match any string which begins with
	(?:)
		-	capture but do not remember (root)
	\/?
		-	match a / literal 0 or 1 time
	|)
		-	OR capture nothing
	(?:)
		-	capture but do not remember (directory)
	[\s\S]
		-	any space or non-space character
	*?
		-	zero or more times, but non-greedily (shortest possible match)
	(?:)
		-	capture but do not remember (basename)
	\.{1,2}
		-	match a . literal 1 or 2 times
	|
		-	OR
	[^\/]+?
		-	match anything which is not a / literal 1 or more times, but do so non-greedily
	|)
		-	OR capture nothing
	()
		-	capture
	\.
		-	match a . literal
	[^.\/]
		-	match anything which is not a . or / literal
	*
		-	zero or more times
	|)
		-	OR capture nothing
	(?:)
		-	capture but do not remember (trailing slash)
	[\/]
		-	match a / literal
	*
		-	zero or more times
	$
		-	end of string
*/


// EXPORTS //

module.exports = re;
