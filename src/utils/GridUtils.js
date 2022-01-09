import { useMemo } from "react";

/**
 *  GridUtils is a class to utilize all
 *  needed operations in the grid data
 */
class GridUtils {
  /**
   * getItems is a method for sorting and searching
   */
  static getItems(items, sortConfig, searchValue) {
    const finalItems = useMemo(() => {
      let ssableItems = items && items.length > 0 ? [...items] : [];

      let searchString = searchValue ? searchValue.trim().toLowerCase() : "";

      /**
       * with sortConfig.direction(asc-desc) changing
       * we can change order of items
       */
      if (sortConfig !== null) {
        ssableItems.sort((a, b) => {
          if (
            a[sortConfig.key] === null ||
            a[sortConfig.key] < b[sortConfig.key]
          ) {
            return sortConfig.direction === "desc" ? 1 : -1;
          }
          if (
            b[sortConfig.key] === null ||
            a[sortConfig.key] > b[sortConfig.key]
          ) {
            return sortConfig.direction === "asc" ? 1 : -1;
          }
          return 0;
        });
      }
      if (searchString.length > 0) {
        // We are searching. Filter the results.
        ssableItems = ssableItems.filter(function(l) {
          return l.title.toLowerCase().match(searchString);
        });
      }
      return ssableItems;
    }, [items, sortConfig, searchValue]);

    return finalItems;
  }
}

export default GridUtils;
