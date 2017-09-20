package mini.api.vo;


import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity @Data
@Table(name = "CATEGORY")
public class CategoryVO {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "CATE_ID")
    private Integer cateId;

    @Column(name = "CATE_NM")
    private String cateNm;

    @Column(name = "UPPER_ID")
    private Integer upperId;

    @Column(name = "ORDER_IDX")
    private Integer orderIdx;

/*
    @ManyToOne
    @JoinColumn(name = )
    private CategoryVO parent;
*/

    @OneToMany(mappedBy = "upperId")
    private List<CategoryVO> child;

}
