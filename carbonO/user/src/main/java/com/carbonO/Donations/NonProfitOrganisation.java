package com.carbonO.Donations;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class NonProfitOrganisation {
    @Id
    @SequenceGenerator(
            name = "organisation_sequence",
            sequenceName = "organisation_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "organisation_sequence"
    )
    private Long id;

    @NotNull
    private String organisationName;
    private String organisationDescription;
    private String organisationImage;

    public NonProfitOrganisation(String organisationName, String organisationDescription, String organisationImage) {
        this.organisationName = organisationName;
        this.organisationDescription = organisationDescription;
        this.organisationImage = organisationImage;
    }
}