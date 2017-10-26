package mini.api.vo;

import lombok.Data;

import javax.persistence.*;

@Entity @Data
@Table(name = "SITE_MENU")
public class SiteMenuVO {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "MENU_ID")
    private long menuId;

    @Column(name = "MENU_NM")
    private String menuNm;

    @Column(name = "UPPER_ID")
    private long upperId;

    @Enumerated(EnumType.STRING)
    @Column(name = "MENU_TYPE")
    private MENU_TYPE menuType;

    @Column(name = "MAPED_ID")
    private long mapedId;

}

enum MENU_TYPE {
    BBS, CNTT, FN
}
