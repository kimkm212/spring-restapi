package mini.api.vo;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import javax.persistence.*;
import java.util.Date;

@Entity @Data
@Table(name = "BOARD_DATA")
public class BoardDataVO {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "DATA_ID")
    private Integer dataId;

    @Column(name = "BOARD_ID")
    private Integer boardId;

/*    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "BOARD_ID")
    private BoardVO boardVO;*/

    @Column(name = "SUBJECT", nullable = false, length = 400)
    private String subject;

    @Column(name = "CONTENT", nullable = false)
    @Lob
    private String content;

    @CreationTimestamp
    @Column(name = "REG_DATE", nullable = false, updatable = false, insertable = false, columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
    @Temporal(TemporalType.TIMESTAMP)
    private Date regDate;

    @UpdateTimestamp
    @Column(name = "UDT_DATE", insertable = false)
    @Temporal(TemporalType.TIMESTAMP)
    private Date udtDate;
}
