interface IPaginationConstructor {
  page: number;
  pageSize: number;
}

interface IPaginateReturnType {
  list: unknown[];
  pagi: {
    total: number;
    count: number;
    page: number;
    pageSize: number;
  };
}

export type TPaginatedParsedReqQuery = IPaginationConstructor;

class Pagination {
  constructor({ page = 1, pageSize = 10 }: IPaginationConstructor) {
    this.total = 0;
    this.count = 0;
    this.page = page < 0 ? 1 : Math.ceil(page);
    this.pageSize = pageSize < 0 ? 10 : Math.ceil(pageSize);
    this.skipCount = (this.page - 1) * this.pageSize;
  }

  paginate(list: unknown[] = [], total: number): IPaginateReturnType {
    this.total = total;
    this.count = list.length;

    return {
      list,
      pagi: {
        page: this.page,
        pageSize: this.pageSize,
        count: this.count,
        total: this.total,
      },
    };
  }

  total: number;
  count: number;
  page: number;
  pageSize: number;
  skipCount: number;
}

export default Pagination;
