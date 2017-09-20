package mini.api.vo;

import lombok.Data;
import org.hibernate.annotations.ColumnTransformer;

import javax.persistence.*;

@Entity @Data
@Table(name = "MEMBER")
public class MemberVO {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "UNIQ_ID")
    private Integer uniqId;

    @Column(name = "MBER_ID")
    private Integer mberId;

    @ColumnTransformer
    @Column(name = "PASSWORD")
    private String password;

}
