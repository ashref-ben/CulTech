package com.example.Reactions.services;

import com.example.Reactions.feign.CommentsService;
import com.example.Reactions.feign.UserDTO;
import com.example.Reactions.feign.UserService;
import com.example.Reactions.model.Reaction;
import com.example.Reactions.model.ReactionType;
import com.example.Reactions.repository.ReactionRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class ReactionServices {
    private ReactionRepository reactionRepository;
    private UserService userService;
    private CommentsService commentsService;
    public Reaction create(Reaction reaction) {
      //  reaction.setIdUser(userService.retrieveUserInfo().getId());// for userid
        return reactionRepository.save(reaction);
    }

    public List<Reaction> getAllReactions() {
        return reactionRepository.findAll();
    }

    public Reaction getReactionById(Integer id) {
        return reactionRepository.findById(id).orElse(null);
    }

    public void deleteReaction(Integer id) {
        reactionRepository.deleteById(id);
    }

    public List<UserDTO> getReactionByblogandtype(Integer idblog, String reactiontype) {
        try {
            ReactionType type = ReactionType.valueOf(reactiontype.toUpperCase());
            List<Reaction> reactions = reactionRepository.findAllByIdUserAndReactionType(idblog, type);
            return reactions.stream()
                    .map(reaction -> userService.getUserById(reaction.getIdUser()))
                    .collect(Collectors.toList());
        } catch (IllegalArgumentException e) {
            throw new RuntimeException("Invalid reaction type");
        }
    }

    public Map<ReactionType, Long> getReactionsCountByBlogId(Integer blogid) {
        List<Object[]> results = reactionRepository.countReactionsByBlogId(blogid);
        Map<ReactionType, Long> reactionCounts = new HashMap<>();
        for (Object[] result : results) {
            reactionCounts.put((ReactionType) result[0], (Long) result[1]);
        }
        // Ensure all reaction types are represented in the map
        for (ReactionType type : ReactionType.values()) {
            reactionCounts.putIfAbsent(type, 0L);
        }
        return reactionCounts;
    }

    public List<Reaction> getAllReactionsofBlog(Integer idblog) {
        return reactionRepository.findAllByBlogid(idblog);
    }
}
