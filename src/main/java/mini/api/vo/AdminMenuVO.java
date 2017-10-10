package mini.api.vo;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity @Data
@Table(name = "ADMIN_MENU")
public class AdminMenuVO {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "MENU_Id")
    private Integer menuId;

    @Column(name = "MENU_NM")
    private String menuNm;

    @Column(name = "PATH")
    private String path;

    @Column(name = "UPPER_ID")
    private Integer upperId;

    @Column(name = "ORDER_IDX")
    private Integer orderIdx;

    @OneToMany(mappedBy = "upperId")
    private List<AdminMenuVO> child;

}
