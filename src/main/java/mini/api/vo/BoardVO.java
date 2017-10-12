package mini.api.vo;


import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity @Data
@Table(name = "BOARD")
public class BoardVO {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "BOARD_ID")
    private Integer boardId;

    @Column(name = "BOARD_NM")
    private String boardNm;

}
