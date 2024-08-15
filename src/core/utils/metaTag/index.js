// -- metaTagViewport
import metaTagData from "@utils/metaTag/data";
import metaTagViewport from "@utils/metaTag/viewport";
import MetaTagDefault from "@utils/metaTag/default";
import metaTagDynamic from "./dynamic";

// -- metaTag
const metaTag = (() => {
	return {
		data: metaTagData,
		viewport: metaTagViewport,
		dynamic: metaTagDynamic,
	};
})();

export { MetaTagDefault };
export default metaTag;
