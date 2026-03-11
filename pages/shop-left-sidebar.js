import Link from "next/link";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PageBanner from "../src/components/PageBanner";
import Pagination from "../src/components/Pagination";
import Layout from "../src/layout/Layout";
import { useLocales } from "../src/locales";
import { useState } from "react";
const ShopLeftSidebar = () => {
  const { t } = useLocales();
  const [sort, setSort] = useState("bestSell");

  const handleChange = (event) => {
    setSort(event.target.value);
  };
  return (
    <Layout>
      <PageBanner pageName={t("category")} />
      <section className="shop-page rel z-1 pt-65 rpt-35 pb-130 rpb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-8">
              <div className="shop-sidebar mt-65">
                <div className="widget widget-search wow fadeInUp delay-0-2s">
                  <form onSubmit={(e) => e.preventDefault()} action="#">
                    <input
                      type="text"
                      placeholder={t('search')}
                      required=""
                    />
                    <button
                      type="submit"
                      className="searchbutton fa fa-search"
                    />
                  </form>
                </div>
                <div className="widget widget-menu wow fadeInUp delay-0-4s">
                  <h4 className="widget-title">
                    <i className="flaticon-leaf-1" />
                    {t('category')}
                  </h4>
                  <ul>
                    <li>
                      <Link legacyBehavior href="/shop-grid">
                        {t('cashew')}
                      </Link>{" "}
                      <span>(8)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="/shop-grid">
                        {t('macca')}
                      </Link>{" "}
                      <span>(5)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="/shop-grid">
                        {t('reishiMushroom')}
                      </Link>{" "}
                      <span>(3)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="/shop-grid">
                        {t('lionMushroom')}
                      </Link>{" "}
                      <span>(9)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="/shop-grid">
                        {t('oysterMushroom')}
                      </Link>{" "}
                      <span>(4)</span>
                    </li>
                  
                  </ul>
                </div>
                <div className="widget widget-menu wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">
                    <i className="flaticon-leaf-1" />
                    {t('filterByPrice')}
                  </h4>
                  <ul>
                    <li>
                      <Link legacyBehavior href="/shop-grid">
                        0đ - 100.000đ
                      </Link>{" "}
                      <span>(159)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="/shop-grid">
                        100.000đ - 200.000đ
                      </Link>{" "}
                      <span>(240)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="/shop-grid">
                        200.000đ - 300.000đ
                      </Link>{" "}
                      <span>(183)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="/shop-grid">
                        300.000đ - 400.000đ
                      </Link>{" "}
                      <span>(324)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="/shop-grid">
                        400.000đ - 500.000đ
                      </Link>{" "}
                      <span>(95)</span>
                    </li>
                    <li>
                      <Link legacyBehavior href="/shop-grid">
                        500.000đ - 600.000đ
                      </Link>{" "}
                      <span>(289)</span>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-products wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">
                    <i className="flaticon-leaf-1" />
                    {t('bestSell')}
                  </h4>
                  <ul>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/product1.png"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <Link legacyBehavior href="/product-details">
                            <a>Orange Juice</a>
                          </Link>
                        </h5>
                        <span className="price">29.95</span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/product2.png"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <Link legacyBehavior href="/product-details">
                            Orange Fruits
                          </Link>
                        </h5>
                        <span className="price">29.95</span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/product3.png"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <Link legacyBehavior href="/product-details">
                            Fresh Broccoli
                          </Link>
                        </h5>
                        <span className="price">29.95</span>
                      </div>
                    </li>
                    <li>
                      <div className="image">
                        <img
                          src="assets/images/widgets/product4.png"
                          alt="Product"
                        />
                      </div>
                      <div className="content">
                        <div className="ratting">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                        </div>
                        <h5>
                          <Link legacyBehavior href="/product-details">
                            Bread Grains
                          </Link>
                        </h5>
                        <span className="price">43.58</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget widget-tag-cloud wow fadeInUp delay-0-2s">
                  <h4 className="widget-title">
                    <i className="flaticon-leaf-1" />
                    {t('popularTags')}
                  </h4>
                  <div className="tag-coulds">
                    <Link legacyBehavior href="/shop-grid">
                      {t('farming')}
                    </Link>
                    <Link legacyBehavior href="/shop-grid">
                      {t('organic')}
                    </Link>
                    <Link legacyBehavior href="/shop-grid">
                      {t('nuts')}
                    </Link>
                    <Link legacyBehavior href="/shop-grid">
                      {t('mushroom')}
                    </Link>
                    <Link legacyBehavior href="/shop-grid">
                      {t('cashew')}
                    </Link>
                    <Link legacyBehavior href="/shop-grid">
                      {t('macca')}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 mt-55">
              <div className="shop-shorter rel z-3 pt-10 mb-40 wow fadeInUp delay-0-2s">
                <div className="products-dropdown">
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                      {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sort}
                        // label="Age"
                        onChange={handleChange}
                        defaultValue="bestSell"
                      >
                        <MenuItem value="bestSell">{t('bestSell')}</MenuItem>
                        <MenuItem value="latest">{t('latest')}</MenuItem>
                        <MenuItem value="oldest">{t('oldest')}</MenuItem>
                                                <MenuItem value="highToLow">{t('highToLow')}</MenuItem>

                        <MenuItem value="lowToHigh">{t('lowToHigh')}</MenuItem>

                      </Select>
                    </FormControl>
                  </Box>
                </div>

                <ul className="grid-list">
                  <li>
                    <a href="#">
                      <i className="fas fa-border-all" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fas fa-bars" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="row shop-left-sidebar-row">
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-2s">
                    <span className="offer">53 Off</span>
                    <div className="image">
                      <img
                        src="assets/images/products/product1.png"
                        alt="Product"
                      />
                    </div>
                    <div className="content">
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <h5>
                        <Link legacyBehavior href="/product-details">
                          Organic Brocolli
                        </Link>
                      </h5>
                      <span className="price">
                        <del>25</del>
                        <span>18</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-4s">
                    <div className="image">
                      <img
                        src="assets/images/products/product2.png"
                        alt="Product"
                      />
                    </div>
                    <div className="content">
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <h5>
                        <Link legacyBehavior href="/product-details">
                          Fresh Carrots
                        </Link>
                      </h5>
                      <span className="price">
                        <span>49.58</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-6s">
                    <span className="offer bg-red">sale</span>
                    <div className="image">
                      <img
                        src="assets/images/products/product3.png"
                        alt="Product"
                      />
                    </div>
                    <div className="content">
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <h5>
                        <Link legacyBehavior href="/product-details">
                          Organic Brocolli
                        </Link>
                      </h5>
                      <span className="price">
                        <del>25</del>
                        <span>18</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-2s">
                    <div className="image">
                      <img
                        src="assets/images/products/product5.png"
                        alt="Product"
                      />
                    </div>
                    <div className="content">
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <h5>
                        <Link legacyBehavior href="/product-details">
                          Fresh Gooseberry
                        </Link>
                      </h5>
                      <span className="price">
                        <span>205</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-4s">
                    <span className="offer">20 Off</span>
                    <div className="image">
                      <img
                        src="assets/images/products/product4.png"
                        alt="Product"
                      />
                    </div>
                    <div className="content">
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <h5>
                        <Link legacyBehavior href="/product-details">
                          Chiken Egg
                        </Link>
                      </h5>
                      <span className="price">
                        <del>55</del>
                        <span>36</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-6s">
                    <span className="offer">53 Off</span>
                    <div className="image">
                      <img
                        src="assets/images/products/product6.png"
                        alt="Product"
                      />
                    </div>
                    <div className="content">
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <h5>
                        <Link legacyBehavior href="/product-details">
                          Fresh Croissants
                        </Link>
                      </h5>
                      <span className="price">
                        <del>25</del>
                        <span>18</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-2s">
                    <div className="image">
                      <img
                        src="assets/images/products/product7.png"
                        alt="Product"
                      />
                    </div>
                    <div className="content">
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <h5>
                        <Link legacyBehavior href="/product-details">
                          Chiken Egg’s
                        </Link>
                      </h5>
                      <span className="price">
                        <span>205</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-4s">
                    <div className="image">
                      <img
                        src="assets/images/products/product8.png"
                        alt="Product"
                      />
                    </div>
                    <div className="content">
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <h5>
                        <Link legacyBehavior href="/product-details">
                          Oragic Orange
                        </Link>
                      </h5>
                      <span className="price">
                        <span>85</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-6s">
                    <div className="image">
                      <img
                        src="assets/images/products/product9.png"
                        alt="Product"
                      />
                    </div>
                    <div className="content">
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <h5>
                        <Link legacyBehavior href="/product-details">
                          Fresh Croissants
                        </Link>
                      </h5>
                      <span className="price">
                        <span>299</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-2s">
                    <span className="offer">53 Off</span>
                    <div className="image">
                      <img
                        src="assets/images/products/product10.png"
                        alt="Product"
                      />
                    </div>
                    <div className="content">
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <h5>
                        <Link legacyBehavior href="/product-details">
                          Organic Brocolli
                        </Link>
                      </h5>
                      <span className="price">
                        <del>25</del>
                        <span>18</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-4s">
                    <div className="image">
                      <img
                        src="assets/images/products/product11.png"
                        alt="Product"
                      />
                    </div>
                    <div className="content">
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <h5>
                        <Link legacyBehavior href="/product-details">
                          Fresh Carrots
                        </Link>
                      </h5>
                      <span className="price">
                        <span>49.58</span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-4 col-sm-6">
                  <div className="product-item wow fadeInUp delay-0-6s">
                    <span className="offer bg-red">sale</span>
                    <div className="image">
                      <img
                        src="assets/images/products/product12.png"
                        alt="Product"
                      />
                    </div>
                    <div className="content">
                      <div className="ratting">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                      <h5>
                        <Link legacyBehavior href="/product-details">
                          Organic Brocolli
                        </Link>
                      </h5>
                      <span className="price">
                        <del>25</del>
                        <span>18</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="pagination flex-wrap justify-content-center pt-10">
                <Pagination
                  paginationCls={".shop-left-sidebar-row .col-xl-4"}
                  defaultSort={6}
                />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default ShopLeftSidebar;
